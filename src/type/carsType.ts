import { IconProp } from "@fortawesome/fontawesome-svg-core";

export type CarsConditions = {
  itemName: string;
  icon: IconProp;
  itemCount: number;
}

export type ISortingInputData = {
  id: string;
  type: string;
  value: string;
  disable: boolean;
  select?: boolean;
  price?: string;
}