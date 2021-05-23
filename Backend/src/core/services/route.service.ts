import { Inject, Injectable } from '@nestjs/common';
import { Route, RouteProps } from '../entities/route.entity';
import { IRepository } from 'src/core/interfaces/irepository.interface';
import { Country } from '../entities/country.entity';
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

  async plan(id: number, plannedDate: Date) {
    const route = await this.routeRepository.getById(id);
    route.plan(plannedDate);
    this.routeRepository.update(id, route);
  }
}
