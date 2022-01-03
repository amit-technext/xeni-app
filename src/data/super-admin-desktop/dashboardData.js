import {
  faUsers,
  faDollarSign,
  faCheck,
  faTimesCircle,
  faHotel,
  faCar,
  faCarAlt,
  faWaveSquare,
  faArchive,
  faPlaneDeparture,
  faExclamationTriangle
} from '@fortawesome/free-solid-svg-icons';
export const statistics = {
  label: 'Statistics',
  children: [
    {
      title: 'Total Users',
      icon: faUsers,
      number: 1231,
      percentage: 10,
      totalAmount: 23413
    },
    {
      title: 'Subscription',
      icon: faDollarSign,
      number: 1231,
      percentage: 0,
      totalAmount: 23413
    },
    {
      title: 'Total Bookings',
      icon: faCheck,
      number: 1231,
      percentage: -22,
      totalAmount: 23413
    },
    {
      title: 'Total Cancelled Bookings',
      icon: faTimesCircle,
      number: 1231,
      percentage: 1,
      totalAmount: 23413
    },
    {
      title: 'Hotel Bookings',
      icon: faHotel,
      number: 1231,
      percentage: 10,
      totalAmount: 23413
    },
    {
      title: 'Car Bookings',
      icon: faCar,
      number: 1231,
      percentage: -3,
      totalAmount: 23413
    },
    {
      title: 'Transfer Bookings',
      icon: faCarAlt,
      number: 1231,
      percentage: 10,
      totalAmount: 23413
    },
    {
      title: 'Activites Bookings',
      icon: faWaveSquare,
      number: 1231,
      percentage: 11,
      totalAmount: 23413
    },
    {
      title: 'Packages Bookings',
      icon: faArchive,
      number: 1231,
      percentage: 14,
      totalAmount: 23413
    },
    {
      title: 'Flight Bookings',
      icon: faPlaneDeparture,
      number: 1231,
      percentage: 10,
      totalAmount: 23413
    },
    {
      title: 'Complains',
      icon: faExclamationTriangle,
      number: 1231,
      percentage: 110,
      totalAmount: 23413
    }
  ]
};
export const time = {
  label: 'Time info',
  children: {
    name: 'Amanda',
    when: 'Afternoon'
  }
};

export default [statistics, time];
