import { provideRouter, RouterConfig } from '@angular/router';

import {HomeRoutes} from './home/home.routes';
import {ViewersRoutes} from './viewers/viewers.routes';

const routes: RouterConfig = [
  ...HomeRoutes,
  ...ViewersRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
