export const routes = {
  publicRoutes: {
    home: '/',
    login: '/auth/login',
  },
  privateRoutes: {
    admin: {
      dashboard: '/admin/dashboard',
      newOrder: 'admin/new-order',
    },
    moderator: {
      dashboard: '/moderator/dashboard',
      newOrder: 'moderator/new-order',
    },
    'studio-partner': {
      dashboard: '/studio-partner/dashboard',
      newOrder: 'studio-partner/new-order',
    },
  },
};
