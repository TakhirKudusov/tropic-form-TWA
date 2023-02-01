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

export type { City, District, FormName };
