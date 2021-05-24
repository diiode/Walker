import { Inject, Injectable } from '@nestjs/common';
import { Route } from '../entities/route.entity';
import { IRepository } from 'src/core/interfaces/irepository.interface';
import { ICountryRepository } from '../interfaces/icountry-repository.interface';

@Injectable()
export class RouteService {
  constructor(
    @Inject('IRouteRepository') private routeRepository: IRepository<Route>,
    @Inject('ICountryRepository')
    private countryRepository: ICountryRepository,
  ) {}

  createRoute(
    title: string,
    description: string,
    length: number,
    link: string,
    countryCode: string,
    province: string,
    difficulty: number,
  ) {
    const country = this.countryRepository.getByCode(countryCode);
    const routeProps: Partial<Route> = {
      title: title,
      description: description,
      length: length,
      link: link,
      country: country,
      province: province,
      difficulty: difficulty,
    };
    const route = Route.create(routeProps);
    this.routeRepository.add(route);
  }

  getAll() {
    return this.routeRepository.getAll();
  }

  getById(id: number) {
    return this.routeRepository.getById(id);
  }

  async update(id: number, updatedRoute: Partial<Route>) {
    const route = await this.routeRepository.getById(id);
    if (route == null) {
      throw new Error('Route not found');
    }

    const routeToUpdate: Partial<Route> = { ...route, ...updatedRoute };
    this.routeRepository.update(id, routeToUpdate);
  }

  async plan(id: number, plannedDate: Date) {
    const route = await this.routeRepository.getById(id);
    if (route == null) {
      throw new Error('Route not found');
    }

    route.plan(plannedDate);
    this.routeRepository.update(id, route);
  }

  async complete(id: number, rating: number) {
    const route = await this.routeRepository.getById(id);
    if (route == null) {
      throw new Error('Route not found');
    }

    route.complete(rating);
    this.routeRepository.update(id, route);
  }
}
