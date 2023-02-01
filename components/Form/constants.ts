import * as yup from "yup";
import { City, District } from "@/common/types/types";

const initialValues = {
  city: "",
  cost: "",
  square: "",
  roomsQuantity: "",
  district: "",
  allowingPets: "false",
  description: "",
  photos: "",
};

const FORM_SCHEMA = yup.object().shape({
  city: yup.string().required("Это обязательное поле!"),
  district: yup.string().required("Это обязательное поле!"),
  cost: yup
    .string()
    .required("Это обязательное поле!")
    .matches(/^\d+$/, "Пожалуйста, введите число!")
    .max(10, "Введите до 10 цифр!"),
  square: yup
    .string()
    .required("Это обязательное поле!")
    .matches(/^\d+$/, "Пожалуйста, введите число!")
    .max(10, "Введите до 10 цифр!"),
  roomsQuantity: yup
    .string()
    .required("Это обязательное поле!")
    .matches(/^\d+$/, "Пожалуйста, введите число!")
    .max(10, "Введите до 10 цифр!"),
  allowingPets: yup.string().required("Это обязательное поле!"),
  description: yup
    .string()
    .required("Это обязательное поле!")
    .max(500, "Введите до 500 символов!"),
  photos: yup.mixed(),
});

const cities: City[] = ["Тбилиси", "Батуми", "Кутаиси"];

const districts: District[] = [
  {
    main: "Ваке-Сабуртало",
    subDistricts: [
      "Багеби",
      "Диди Дигоми",
      "Ваке",
      "Вашлиджвари",
      "Сабуртало",
      "Важа пшавела",
    ],
  },
  {
    main: "Исани-Самгори",
    subDistricts: [
      "Вазисубани",
      "Варкетили",
      "Исани",
      "Лило",
      "Навтлуги",
      "Ортачала",
      "Самгори",
      "Поничала",
      "Африка",
    ],
  },
  {
    main: "Глдани-Надзаладеви",
    subDistricts: [
      "Авчала",
      "Глдани",
      "Загеси",
      "Ивертубани",
      "Лоткини",
      "Мухиани",
      "Надзаладеви",
      "Санзона",
    ],
  },
  {
    main: "Дидубе-Чугурети",
    subDistricts: ["Дидубе", "Кукия", "СванетисУбани", "Чугурети"],
  },
  {
    main: "Старый Тбилиси",
    subDistricts: ["Авлабари", "Вера", "Мтацминда", "Сололаки"],
  },
];

export { initialValues, FORM_SCHEMA, cities, districts };
