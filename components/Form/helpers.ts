import { MyFormData, WindowTg } from "@/common/types/types";
import axios from "axios";
import heic2any from "heic2any";
import {Dispatch, SetStateAction} from "react";
import {toast} from "react-toastify";


function generateUniqueId(prefix: string, suffix: string) {
  const randomNum = Math.random().toString(36).substr(2, 9);
  return `${prefix || ""}${randomNum}${suffix || ""}`;
}

const handleSubmitForm = async (data: MyFormData, uniqueId: string, setLoading: Dispatch<SetStateAction<boolean>>) => {
  if (typeof window !== "undefined" && typeof (window as WindowTg)?.Telegram !== "undefined") {
    try {
      const { photos, ...newData } = data;
      // (window as WindowTg)?.Telegram.WebApp.sendData(JSON.stringify(newData));

      if (!newData.district) {
        newData.district = "null";
      }

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

        // try {
        //   if (photos[i].type === "image/heic" || photos[i].type === "image/heif") {
        //     photo = await heic2any({
        //       blob: photos[i],
        //       toType: "image/jpg",
        //       quality: 0.5,
        //     })
        //
        //     photo = new File([(photo as BlobPart)], `${uniqueId}_${i}.jpg`, { type: "image/jpg" })
        //
        //   }
        // } catch (error) {
        //     console.error(error)
        // }

        await axios({
          method: "post",
          url: "/api/files",
          data: {
            my_files: photos[i] ?? "error",
            user_id:uniqueId,
            uniq_id: uniqueId,
          },
          headers: { "Content-Type": "multipart/form-data" },
        });
      }
      (window as WindowTg)?.Telegram.WebApp.close();
    } catch (error) {
      console.error(error);
      toast.error("Ошибка отправки данных: " + error);
    }
    setLoading(false);
  }
};

export { handleSubmitForm, generateUniqueId };
