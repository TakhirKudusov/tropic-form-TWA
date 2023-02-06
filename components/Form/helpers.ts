import { MyFormData, WindowTg } from "@/common/types/types";
import axios from "axios";

const handleSubmitForm = (data: MyFormData) => {
  if (typeof (window as WindowTg)?.Telegram !== "undefined") {
    try {
      const { photos, ...newData } = data;
      console.log(newData);
      (window as WindowTg)?.Telegram.WebApp.sendData(JSON.stringify(newData));

      console.log((window as WindowTg)?.Telegram.WebApp.initDataUnsafe);

      for (let i = 0; i < photos.length; i++) {
        axios({
          method: "post",
          url: "/api/files",
          data: {
            my_files: photos[i],
            user_id: (window as WindowTg)?.Telegram?.WebApp?.initData?.user?.id,
          },
          headers: { "Content-Type": "multipart/form-data" },
        })
          .then((data) => console.log(data))
          .catch((error) => console.error(error));
      }
    } catch (error) {
      console.error(error);
    }
  }
};

export { handleSubmitForm };
