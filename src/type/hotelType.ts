export type GeoCode = {
  lat: string;
  long: string;
};

export type Contact = {
  address: {
    line1: string;
    city: object;
    country: object;
    state?: object;
    postalCode: string;
  };
  phones?: string[];
  fax: unknown[];
};

export type Descriptions = {
  type: string;
  text: string;
};
export type Facilities = {
  id: string;
  groupId: string;
  name: string;
};
export type FacilityGroups = {
  id: string;
  culture: string;
  name: string;
  type: string;
};

export type Links = {
  size: string;
  url: string;
};

export type Images = {
  links: Links[];
  roomCodes: string[];
};

export type Rooms = {
  roomId: string;
  type: string;
  facilities: Facilities[];
};

export type Rate = {
  totalRate: string;
  publishedRate: number;
  baseRate: string;
  commission: number;
  taxes: number;
  fees: number;
  discounts: number;
  providerId: string;
  providerName: string;
  distributionType: string;
  type: string;
  payAtHotel: boolean;
  publishedBaseRate: number;
};

export type Options = {
  freeBreakfast?: boolean;
  refundable?: boolean;
  payAtHotel?: boolean;
  freeCancellation?: boolean,
  contractedRateExists?: boolean;
};
