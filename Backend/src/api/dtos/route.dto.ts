import { Country } from 'src/core/entities/country.entity';
import { Gpx } from 'src/core/entities/gpx.entity';
import { RouteStatus } from 'src/core/entities/route.entity';

export class RouteResultDto {
  id: number;
  dateTimeCreated: Date;
  title: string;
  description?: string;
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
