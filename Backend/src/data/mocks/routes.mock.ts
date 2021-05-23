import { Route, RouteStatus } from 'src/core/entities/route.entity';
import { countries } from './countries.mock';

const route = Route.create({
  dateTimeCreated: new Date(2021, 5, 23, 9, 29, 0),
  title: 'De Wijers: De Maten',
  country: countries.find((c) => c.code === 'BE'),
  length: 6.7,
  difficulty: 1,
  link: 'https://www.wandeleninlimburg.be/nl/wandelroutes/3377710/',
  province: 'Limburg',
  status: RouteStatus.Added,
});
route.id = 1;

export const routes: Route[] = [route];
