import { ApiProperty } from '@nestjs/swagger';
import { Country } from 'src/core/entities/country.entity';
import { Gpx } from 'src/core/entities/gpx.entity';
import { RouteStatus } from 'src/core/entities/route.entity';
import { CountryResultDto } from './country.dto';

export class RouteResultDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  dateTimeCreated: Date;

  @ApiProperty()
  title: string;

  @ApiProperty()
  description?: string;

  @ApiProperty()
  length: number;

  @ApiProperty()
  link: string;

  @ApiProperty()
  country: CountryResultDto;

  @ApiProperty()
  province: string;

  @ApiProperty()
  geoGpx: Gpx;

  @ApiProperty({
    enum: RouteStatus,
  })
  status: RouteStatus;

  @ApiProperty()
  plannedDate: Date;

  @ApiProperty()
  doneDate: Date;

  @ApiProperty()
  rating: number;

  @ApiProperty()
  difficulty: number;
}
