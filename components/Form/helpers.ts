import { MyFormData, WindowTg } from "@/common/types/types";
import axios from "axios";
import heic2any from "heic2any";
import {Dispatch, SetStateAction} from "react";


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
        let photo: Blob | Blob[] | File | BlobPart =  photos[i];

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


        // //if HEIC file
        // if(photos[i] && photos[i].name.includes(".HEIC") || photos[i].name.includes(".heic")) {
        //   // get image as blob url
        //   const blobURL = URL.createObjectURL(photos[i]);
        //
        //   // convert "fetch" the new blob url
        //   const blobRes = await fetch(blobURL)
        //
        //   // convert response to blob
        //   const blob = await blobRes.blob()
        //
        //   // convert to PNG - response is blob
        //   const conversionResult = await heic2any({ blob, toType: "image/jpeg", quality: 0.5 })
        //
        //     // convert blob to file
        //   photo = new File([(conversionResult as Blob)], `${uniqueId}_${i}.jpeg`, { type: "image/jpeg" })
        // }


        console.log(photo)

        await axios({
          method: "post",
          url: "/api/files",
          data: {
            my_files: photo,
            user_id:
              (window as WindowTg)?.Telegram?.WebApp?.initDataUnsafe?.user
                ?.id ?? "error",
            uniq_id: uniqueId,
          },
          headers: { "Content-Type": "multipart/form-data" },
        });
      }
      (window as WindowTg)?.Telegram.WebApp.close();
    } catch (error) {
      console.error(error);
    }
    setLoading(false);

  }
};

export { handleSubmitForm, generateUniqueId };
