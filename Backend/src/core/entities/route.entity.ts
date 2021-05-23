import { BaseEntity } from './base.entity';
import { Country } from './country.entity';
import { Gpx } from './gpx.entity';

export interface RouteProps {
  id?: number;
  dateTimeCreated: Date;
  title: string;
  description: string;
  length: number;
  link: string;
  country: Country;
  province: string;
  geoGpx: Gpx;
  status: RouteStatus;
  plannedDate: Date;
  doneDate: Date;
  rating: number;
  difficulty: number;
}

export class Route extends BaseEntity {
  id: number;
  dateTimeCreated: Date;
  title: string;
  description?: string;
  length: number;
  link: string;
  country: Country;
  province: string;
  geoGpx?: Gpx;
  status: RouteStatus;
  plannedDate?: Date;
  doneDate?: Date;
  rating?: number;
  difficulty: number;

  private constructor(route: Partial<RouteProps>) {
    super();
    this.id = 0;
    this.title = route.title;
    this.description = route.description;
    this.dateTimeCreated = new Date();
    this.length = route.length;
    this.link = route.link;
    this.country = route.country;
    this.province = route.province;
    this.status = RouteStatus.Added;
    this.difficulty = route.difficulty;
  }

  public static create(route: Partial<RouteProps>): Route {
    return new Route(route);
  }

  plan() {
    if (this.status == RouteStatus.Planned) {
      console.log('Route already planned');
    } else if (this.status == RouteStatus.Added) {
      this.status = RouteStatus.Planned;
      this.plannedDate = new Date();
    } else if (this.status == RouteStatus.Done) {
      throw new Error(`Can't plan a route that's already planned.`);
    }
  }
}

export enum RouteStatus {
  Added,
  Planned,
  Done,
}
