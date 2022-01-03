import React, {FC} from 'react';
import CarsBookingFormWidget from 'components/b2c-desktop/cars/cars-forms/CarsBookingFormWidget';
import { carouselData } from 'data/b2c-desktop/carouselData';
import LandingPageLayout from '../landing/LandingPageLayout';

const CarLandingPage:FC = function CarLandingPage() {
  return <LandingPageLayout
	carouselData={carouselData}
	formWidgetComponent={<CarsBookingFormWidget />}
  />
}

export default CarLandingPage;