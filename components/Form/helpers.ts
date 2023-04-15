import { MyFormData, WindowTg } from "@/common/types/types";
import axios from "axios";

function generateUniqueId(prefix: string, suffix: string) {
  const randomNum = Math.random().toString(36).substr(2, 9);
  return `${prefix || ""}${randomNum}${suffix || ""}`;
}

const
    handleSubmitForm = async (data: MyFormData, uniqueId: string) => {
  if (typeof (window as WindowTg)?.Telegram !== "undefined") {
    try {
      const { photos, ...newData } = data;
      // (window as WindowTg)?.Telegram.WebApp.sendData(JSON.stringify(newData));

      if (!newData.district) {
        newData.district = "null";
      }

      console.log(newData);

      await axios({
        method: "post",
        url: "/api/data",
        data: {
          ...newData,
          user_id:
            (window as WindowTg)?.Telegram?.WebApp?.initDataUnsafe?.user?.id ??
            "error",
          uniq_id: uniqueId,
        },
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      });

      for (let i = 0; i < photos.length; i++) {
        await axios({
          method: "post",
          url: "/api/files",
          data: {
            my_files: photos[i],
            user_id:
              (window as WindowTg)?.Telegram?.WebApp?.initDataUnsafe?.user
                ?.id ?? "error",
            uniq_id: uniqueId,
          },
          headers: { "Content-Type": "multipart/form-data" },
        });
      }
    } catch (error) {
      console.error(error);
    }
    (window as WindowTg)?.Telegram.WebApp.close();
  }
};

export { handleSubmitForm, generateUniqueId };
