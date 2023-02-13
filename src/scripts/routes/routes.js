import { HomePage, DetailPage, FavoritePage } from '@pages';

export const routes = {
  '/': HomePage, // default page
  '/detail/:id': DetailPage,
  '/favorite': FavoritePage,
};

export default routes;
