import { Inject, Injectable } from '@nestjs/common';
import { Country } from '../entities/country.entity';
import { Route, RouteProps } from '../entities/route.entity';
import { IRepository } from 'src/core/interfaces/irepository.interface';

@Injectable()
export class RouteService {
  constructor(
    @Inject('IRouteRepository') private routeRepository: IRepository<Route>,
  ) {}

  createRoute(routeProps: Partial<RouteProps>) {
    const route = Route.create(routeProps);

    this.routeRepository.add(route);
  }
}
