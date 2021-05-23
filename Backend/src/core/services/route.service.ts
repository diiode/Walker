import { Inject, Injectable } from '@nestjs/common';
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

  getAll() {
    return this.routeRepository.getAll();
  }

  getById(id: number) {
    return this.routeRepository.getById(id);
  }

  async plan(id: number) {
    const route = await this.routeRepository.getById(id);
    route.plan();
    this.routeRepository.update(id, route);
  }
}
