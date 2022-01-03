export const contentManagement = {
  label: 'Content Management',
  children: [
    {
      name: 'Profiles',
      to: '/flightadmin/profile',
      active: true,
      target: ''
    },
    {
      name: 'Mark-up Rules',
      to: '/flightadmin/markuprules',
      active: true,
      target: ''
    },
    {
      name: 'Restrictions',
      to: '/flightadmin/restrictions',
      active: true,
      target: ''
    },
    {
      name: 'PCCs',
      to: '/flightadmin/pccs',
      active: true,
      target: ''
    },
    {
      name: 'Assignments',
      to: '/flightadmin/assigenments',
      active: true,
      target: ''
    },
    {
      name: 'Limits',
      to: '/flightadmin/limits',
      active: true,
      target: ''
    }
  ]
};
export const security = {
  label: 'Security',
  children: [
    {
      name: 'Volume restrictions',
      to: '/flightadmin/volumerestrictions',
      active: true,
      target: ''
    },
    {
      name: 'Usage restrictions',
      to: '/flightadmin/usagerestrictions',
      active: true,
      target: ''
    },
    {
      name: 'PCC Accesses',
      to: '/flightadmin/pccaccess',
      active: true,
      target: ''
    },
    {
      name: 'PCC-Tenants',
      to: '/flightadmin/pcctenants',
      active: true,
      target: ''
    }
  ]
};

export const ContentOptimization = {
  label: 'SecContent Optimizationurity',
  children: [
    {
      name: 'COR',
      to: '/flightadmin/cor',
      active: true,
      target: ''
    },
    {
      name: 'Upload CORs',
      to: '/flightadmin/uploadcors',
      active: true,
      target: ''
    }
  ]
};
export const Dashboard = {
  label: 'Dashboard',
  labelDisable: true,
  children: [
    {
      name: 'Dashboard',
      icon: 'chart-pie',
      to: '/sa-dashboard',
      active: true,
      target: ''
    }
  ]
};
export const FlightAdmin = {
  label: 'Flight Admin',
  labelDisable: true,
  children: [
    {
      name: 'Flight Admin',
      active: true,
      icon: 'code-branch',
      children: [
        {
          name: 'Management',
          active: true,
          icon: '',
          children: [
            {
              name: 'Profiles',
              to: '/flightadmin/profile',
              active: true,
              target: ''
            },
            {
              name: 'Mark-up Rules',
              to: '/flightadmin/markuprules',
              active: true,
              target: ''
            },
            {
              name: 'Restrictions',
              to: '/flightadmin/restrictions',
              active: true,
              target: ''
            },
            {
              name: 'PCCs',
              to: '/flightadmin/pccs',
              active: true,
              target: ''
            },
            {
              name: 'Assignments',
              to: '/flightadmin/assigenments',
              active: true,
              target: ''
            },
            {
              name: 'Limits',
              to: '/flightadmin/limits',
              active: true,
              target: ''
            }
          ]
        },
        {
          name: 'Security',
          active: true,
          icon: '',
          children: [
            {
              name: 'Volume restrictions',
              to: '/flightadmin/volumerestrictions',
              active: true,
              target: ''
            },
            {
              name: 'Usage restrictions',
              to: '/flightadmin/usagerestrictions',
              active: true,
              target: ''
            },
            {
              name: 'PCC Accesses',
              to: '/flightadmin/pccaccess',
              active: true,
              target: ''
            },
            {
              name: 'PCC-Tenants',
              to: '/flightadmin/pcctenants',
              active: true,
              target: ''
            }
          ]
        },
        {
          name: 'Optimization',
          active: true,
          icon: '',
          children: [
            {
              name: 'COR',
              to: '/flightadmin/cor',
              active: true,
              target: ''
            },
            {
              name: 'Upload CORs',
              to: '/flightadmin/uploadcors',
              active: true,
              target: ''
            }
          ]
        }
      ]
    }
  ]
};
export const HotelAdmin = {
  label: 'Hotel Admin',
  labelDisable: true,
  children: [
    {
      name: 'Hotel Admin',
      active: true,
      icon: 'code-branch',
      children: [
        {
          name: 'Hotel Report',
          active: true,
          icon: '',
          children: [
            {
              name: 'TBO Report',
              to: '/',
              active: true,
              target: ''
            }
          ]
        }
      ]
    }
  ]
};
export default [Dashboard, FlightAdmin, HotelAdmin];
