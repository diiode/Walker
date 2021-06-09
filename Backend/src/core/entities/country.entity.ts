import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Route } from './route.entity';

@Entity()
export class Country extends BaseEntity {
  @Column()
  name: string;

  @PrimaryColumn()
  code: string;

  @OneToMany(() => Route, (route) => route.country)
  routes?: Route[];
}
