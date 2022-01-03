import {
  faCar,
  faHotel,
  faListAlt,
  faPlaneDeparture,
  faUserAlt
} from '@fortawesome/free-solid-svg-icons';

export const navItems = [
  { path: '/air-travel', icon: faPlaneDeparture, label: 'Air Travels' },
  { path: '/stays', icon: faHotel, label: 'Stays' },
  { path: '/cars', icon: faCar, label: 'Cars' },
  { path: '/activities', icon: faListAlt, label: 'Activities' },
  { path: '/group-travel', icon: faUserAlt, label: 'Group Travels' },
  { path: '/sea-travel', icon: faPlaneDeparture, label: 'Sea Travels' }
];
