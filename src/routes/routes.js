export const dashboardRoutes = {
  label: 'Dashboard',
  labelDisable: true,
  children: [
    {
      name: 'Dashboard',
      active: true,
      icon: 'chart-pie',
      children: [
        {
          name: 'Default',
          to: '/',
          exact: true,
          active: true
        },
        {
          name: 'Analytics',
          to: '/dashboard/analytics',
          active: true
        }
      ]
    }
  ]
};

export default [dashboardRoutes];
