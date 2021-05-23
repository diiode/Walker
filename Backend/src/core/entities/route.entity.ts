import { link } from 'node:fs';
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
  description: string;
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

  public static create(route: Partial<RouteProps>): Route {
    return {
      id: 0,
      title: route.title,
      description: route.description,
      dateTimeCreated: new Date(),
      length: route.length,
      link: route.link,
      country: route.country,
      province: route.province,
      status: RouteStatus.Added,
      difficulty: route.difficulty,
    };
  }
}

export enum RouteStatus {
  Added,
  Planned,
  Done,
}
