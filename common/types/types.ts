type City = "Тбилиси" | "Батуми" | "Кутаиси";

type District = {
  main: string;
  subDistricts: string[];
};

type FormName =
  | "city"
  | "cost"
  | "square"
  | "roomsQuantity"
  | "district"
  | "allowingPets"
  | "description"
  | "photos";

type MyFormData = Omit<Record<FormName, string>, "photos" | "allowingPets"> &
  Record<"photos", File[]> &
  Record<"allowingPets", boolean>;

type WindowTg = Window & typeof globalThis & { Telegram: any };

export type { City, District, FormName, MyFormData, WindowTg };
