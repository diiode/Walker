import { BaseEntity } from './base.entity';
import { Country } from './country.entity';
import { Gpx } from './gpx.entity';

export interface CreateRouteProps {
  title: string;
  description?: string;
  length: number;
  link?: string;
  country: Country;
  province?: string;
  difficulty: number;
}

export class Route extends BaseEntity {
  id: number;
  dateTimeCreated: Date;
  title: string;
  description?: string;
  length: number;
  link?: string;
  country: Country;
  province?: string;
  geoGpx?: Gpx;
  status: RouteStatus;
  plannedDate?: Date;
  doneDate?: Date;
  rating?: number;
  difficulty: number;

  constructor(route: CreateRouteProps) {
    super();
    Object.assign(this, route);
    this.dateTimeCreated = new Date();
    this.status = RouteStatus.Added;
  }

  public static create(route: CreateRouteProps): Route {
    return new Route(route);
  }

  plan(plannedDate: Date) {
    if (this.status == RouteStatus.Planned) {
      console.log('Route already planned');
    } else if (this.status == RouteStatus.Added) {
      this.status = RouteStatus.Planned;
      this.plannedDate = plannedDate;
    } else if (this.status == RouteStatus.Done) {
      throw new Error(`Can't plan a route that's already planned.`);
    }
  }

  complete(rating: number) {
    if (this.status != RouteStatus.Planned) {
      throw new Error(`Can't complete a route that's not planned.`);
    }
    this.status = RouteStatus.Done;
    this.rating = rating;
    this.doneDate = new Date();
  }
}

export enum RouteStatus {
  Added = 'Added',
  Planned = 'Planned',
  Done = 'Done',
}
