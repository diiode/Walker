import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BaseEntity } from './base.entity';
import { Country } from './country.entity';
import { Gpx } from './gpx.entity';
import { RouteStatus } from './route-status.enum';

export interface CreateRouteProps {
  title: string;
  description?: string;
  length: number;
  link?: string;
  country: Country;
  province?: string;
  difficulty: number;
}

@Entity()
export class Route extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  dateTimeCreated: Date;

  @Column()
  title: string;

  @Column({
    nullable: true,
  })
  description?: string;

  @Column()
  length: number;

  @Column({
    nullable: true,
  })
  link?: string;

  @ManyToOne(() => Country, (country) => country.routes, {})
  @JoinColumn({
    referencedColumnName: 'code',
  })
  country: Country;

  @Column()
  province?: string;

  geoGpx?: Gpx;

  @Column({
    type: 'simple-enum',
    enum: RouteStatus,
  })
  status: RouteStatus;

  @Column({
    nullable: true,
  })
  plannedDate?: Date;

  @Column({
    nullable: true,
  })
  doneDate?: Date;

  @Column({
    nullable: true,
  })
  rating?: number;

  @Column({
    nullable: true,
  })
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

  public plan(plannedDate: Date) {
    if (this.status == RouteStatus.Planned) {
      console.log('Route already planned');
    } else if (this.status == RouteStatus.Added) {
      this.status = RouteStatus.Planned;
      this.plannedDate = plannedDate;
    } else if (this.status == RouteStatus.Done) {
      throw new Error(`Can't plan a route that's already planned.`);
    }
  }

  public complete(rating: number) {
    if (this.status != RouteStatus.Planned) {
      throw new Error(`Can't complete a route that's not planned.`);
    }
    this.status = RouteStatus.Done;
    this.rating = rating;
    this.doneDate = new Date();
  }
}
