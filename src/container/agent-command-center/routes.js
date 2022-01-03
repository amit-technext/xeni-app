import {
  faArrowRight,
  faCog,
  faCompass,
  faHeadset,
  // faICursor,
  faInfinity,
  faSignOutAlt,
  faTh,
  faUsers,
  faWrench
} from '@fortawesome/free-solid-svg-icons';

// export const DemoList = {
//   label: 'Demo List',
//   children: [
//     {
//       name: 'Demo List',
//       icon: 'code-branch',
//       to: '/demo-list',
//       active: true
//     }
//   ]
// };

export const AgentCommandCenter = {
  label: 'AgentCommandCenter',
  labelDisable: true,
  children: [
    {
      name: 'Dashboard',
      icon: faTh,
      to: '/dashboard',
      active: true,
      target: ''
    },
    {
      name: 'Book Now',
      icon: faArrowRight,
      to: '/booknow',
      active: true,
      target: ''
    },
    {
      name: 'Clients',
      icon: faUsers,
      to: '/login',
      active: true,
      target: ''
    },
    {
      name: 'PLUM',
      icon: faWrench,
      to: '/flightadmin/login',
      active: true,
      target: ''
    },
    {
      name: 'Bookings',
      icon: faCompass,
      to: '/flightadmin/login',
      active: true,
      target: ''
    },
    {
      name: 'Settings',
      icon: faCog,
      to: '/settings',
      active: true,
      target: ''
    },
    {
      name: 'Customize Theme',
      icon: faCog,
      to: '/theme',
      active: true,
      target: ''
    },
    {
      name: 'Xennies',
      icon: faInfinity,
      to: '/flightadmin/login',
      active: true,
      target: ''
    },
    {
      name: 'Support',
      icon: faHeadset,
      to: '/flightadmin/login',
      active: true,
      target: ''
    },
    {
      name: 'Log out',
      icon: faSignOutAlt,
      to: '/demo-list',
      active: true,
      target: ''
    }
  ]
};
export default [AgentCommandCenter];
