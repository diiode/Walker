import { Route } from 'src/core/entities/route.entity';
import { RouteStatus } from 'src/core/entities/route-status.enum';
import { EntitySchema } from 'typeorm';

export const RouteSchema = new EntitySchema<Route>({
  name: 'route',
  // target: Route,
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true,
    },
    dateTimeCreated: {
      type: Date,
    },
    title: {
      type: String,
    },
    description: {
      type: String,
      nullable: true,
    },
    length: {
      type: Number,
    },
    link: {
      type: String,
      nullable: true,
    },
    // country: Country;
    province: {
      type: String,
      nullable: true,
    },
    // geoGpx?: Gpx;
    status: {
      type: 'simple-enum',
      enum: RouteStatus,
    },
    plannedDate: {
      type: Date,
      nullable: true,
    },
    doneDate: {
      type: Date,
      nullable: true,
    },
    rating: {
      type: Number,
      nullable: true,
    },
    difficulty: {
      type: Number,
    },
  },
  relations: {
    country: {
      type: 'many-to-one',
      target: 'country',
      joinColumn: { referencedColumnName: 'code' },
      inverseSide: 'routes',
    },
  },
});
