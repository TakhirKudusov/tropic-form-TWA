import { MyFormData, WindowTg } from "@/common/types/types";

const handleSubmitForm = (data: MyFormData) => {
  if (typeof (window as WindowTg)?.Telegram !== "undefined") {
    try {
      const { photos, ...newData } = data;
      console.log(newData);
      (window as WindowTg)?.Telegram.WebApp.sendData(JSON.stringify(newData));
    } catch (error) {
      console.error(error);
    }
  }
};

export { handleSubmitForm };
