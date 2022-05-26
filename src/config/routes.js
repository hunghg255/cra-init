// Pages
import Home from '@/pages/Home';

export const routes = {
  home: '/',
};

// Public routes
const publicRoutes = [{ path: routes.home, component: Home }];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
