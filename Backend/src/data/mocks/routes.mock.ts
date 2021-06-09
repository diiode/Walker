import { Route } from 'src/core/entities/route.entity';
import { RouteStatus } from 'src/core/entities/route-status.enum';
import { countries } from './countries.mock';

const route = Route.create({
  title: 'De Wijers: De Maten',
  country: countries.find((c) => c.code === 'BE'),
  length: 6.7,
  difficulty: 1,
  link: 'https://www.wandeleninlimburg.be/nl/wandelroutes/3377710/',
  province: 'Limburg',
});
route.id = 1;
route.dateTimeCreated = new Date(2021, 5, 23, 9, 29, 0);
route.status = RouteStatus.Added;

export const routes: Route[] = [route];
