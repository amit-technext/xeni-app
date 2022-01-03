import React from 'react';
import {
  Flight,
  Sea,
  Car,
  GroupTravels,
  BedEmptySolid,
  FootballBallSolid,
} from './assets/icons';

export const version = '3.0.0-alpha2';
export const navbarBreakPoint = 'xl'; // Vertical navbar breakpoint
export const topNavbarBreakpoint = 'lg';

export const settings = {
  isFluid: false,
  isRTL: false,
  isDark: false,
  hotelMapView: false,
  navbarPosition: 'combo',
  showBurgerMenu: false, // controls showing vertical nav on mobile
  currency: '$',
  isNavbarVerticalCollapsed: false, // toggle vertical navbar collapse
  navbarStyle: 'transparent',
  primaryColor: '#2c7be5',
  isB2C: false,
  appName: 'default',
  showSearchPanel: false,
  showLeftMenuMobile: false,
  url: '',
  fontFamily: [
    "'Open Sans', sans-serif",
    "'Poppins', sans-serif",
    "'Roboto', sans-serif",
    "'Comic Neue', cursive",
  ],
  userFontFamily: "'Poppins', sans-serif",
  tripType: 'One Way',
  searchTrip: 'One Way',
  navItems: [
    {
      id: 1,
      title: 'Air Travels',
      icon: <Flight height="1.6rem" width="1.6rem" />,
      href: '/flight',
      active: true,
    },
    {
      id: 2,
      title: 'Hotels',
      icon: <BedEmptySolid height="1.6rem" width="1.6rem" />,
      href: '/hotels',
      active: true,
    },
    {
      id: 3,
      title: 'Cars',
      icon: <Car height="1.6rem" width="1.6rem" />,
      href: '/cars',
      active: true,
    },
    {
      id: 4,
      title: 'Activities',
      icon: <FootballBallSolid height="1.6rem" width="1.6rem" />,
      href: '/activities',
      active: true,
    },
    {
      id: 5,
      title: 'Group Travels',
      icon: <GroupTravels height="1.6rem" width="1.6rem" />,
      href: '/group-travels',
      active: true,
    },
    {
      id: 6,
      title: 'Sea Travels',
      icon: <Sea height="1.6rem" width="1.6rem" />,
      href: '/sea-travels',
      active: true,
    },
  ],
  aircraftType: [
    {
      id: '1', active: true, label: 'Commercial', value: 'commercial',
    },
    {
      id: '2',
      active: true,
      label: 'Private Charter',
      value: 'private_charter',
    },
    {
      id: '3', active: true, label: 'Helicopters', value: 'helicopters',
    },
  ],
  hotelTypes: [
    {
      id: '1', active: true, label: 'Hotel', value: 'hotel',
    },
    {
      id: '2',
      active: true,
      label: 'Villas & Homes',
      value: 'villas & home',
    },
    {
      id: '3', active: true, label: 'Compounds', value: 'compounds',
    },
  ],
};

export default {
  version, navbarBreakPoint, topNavbarBreakpoint, settings,
};
