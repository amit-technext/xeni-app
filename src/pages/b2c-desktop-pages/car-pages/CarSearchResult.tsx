import CarsBookingFormWidget from 'components/b2c-desktop/cars/cars-forms/CarsBookingFormWidget';
import DesktopResultSearchLayout from 'container/b2c-desktop/DesktopResultSearchLayout';
import React,{FC} from 'react';
import CarsSearchResultGenerator from '../../../components/b2c-desktop/cars/cars-search/CarsSearchResultGenerator';

const CarSearchResult:FC = function CarSearchResult() {
  return (
    <DesktopResultSearchLayout
	searchWidget={<CarsBookingFormWidget />}
	searchResult={<CarsSearchResultGenerator />}
      />
  );
}

export default CarSearchResult;