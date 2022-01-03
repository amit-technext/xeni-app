import { HTMLAttributes } from "react";
import { CarsConditions } from "type/carsType";

export interface ICarsSearchResult {
  id: string;
  title: string;
  carImage: string;
  carCompany: string;
  companyLogo: string;
  pickTime: string;
  pickLocation: string;
  dropTime: string;
  dropLocation: string;
  carSeatClass: string;
  fare: number;
  fareFor: string;
  conditions: CarsConditions[]
}

export interface CarSearchResultProps extends HTMLAttributes<HTMLOrSVGElement> {
	searchResult: ICarsSearchResult[]
}
