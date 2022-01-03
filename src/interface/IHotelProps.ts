import { Dispatch, HTMLAttributes, SetStateAction } from 'react';
import { Guests } from 'type/HotelInfoType';
import {
  Contact, Descriptions, Facilities, FacilityGroups, GeoCode, Images, Options, Rate, Rooms
} from 'type/hotelType';

export interface IHotelSearchProps {
  id: string;
  name: string;
  relevanceScore: string;
  providerId: string;
  providerHotelId: string;
  providerName: string;
  geoCode: GeoCode;
  neighbourhoods: never[];
  contact: Contact;
  chainCode: string;
  chainName: string;
  type: string;
  descriptions: Descriptions[];
  category: string;
  starRating: number;
  facilities: Facilities[];
  facilityGroups: FacilityGroups[];
  nearByAttractions: never[];
  images: Images[];
  policies: [];
  fees: [];
  reviews: [];
  checkinInfo: {
    minAge: string;
  };
  heroImage: string;
  distance: string;
  imageCount: string;
  rooms: Rooms[];
  rate: Rate;
  isNewInResult: boolean;
  moreRatesExpected: boolean;
  isRecommended: boolean;
  options: Options;
}

export interface HotelSearchResultGeneratorProps
  extends HTMLAttributes<HTMLOrSVGElement> {
  hotelSearchResult: IHotelSearchProps[]
  selectedHotel: IHotelSearchProps[]
  setSelectedHotel: React.Dispatch<React.SetStateAction<IHotelSearchProps[]>>
  dayCount: number
}


export interface MGuestAndRoomDropdownProps
	extends HTMLAttributes<HTMLOrSVGElement> {
	guest: Guests[]
	setGuest: Dispatch<SetStateAction<Guests[]>>
}