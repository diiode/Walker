import { Module } from '@nestjs/common';
import { CountryRepo } from 'src/data/repositories/country.repository';
import { MockRouteRepo } from 'src/data/mocks/mock-route.repository';
import { CountryService } from './services/country.service';
import { RouteService } from './services/route.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CountrySchema } from 'src/data/entity-schemas/country.schema';
import { RouteSchema } from 'src/data/entity-schemas/route.schema';
import { RouteRepo } from 'src/data/repositories/route.repository';

@Module({
  imports: [TypeOrmModule.forFeature([CountrySchema, RouteSchema])],
  providers: [
    // {
    //   provide: 'ICountryRepo',
    //   useClass: MockCountryRepo,
    // },
    {
      provide: 'ICountryRepo',
      useClass: CountryRepo,
    },
    // {
    //   provide: 'IRouteRepo',
    //   useClass: MockRouteRepo,
    // },
    {
      provide: 'IRouteRepo',
      useClass: RouteRepo,
    },
    CountryService,
    RouteService,
  ],
  exports: [CountryService, RouteService],
})
export class CoreModule {}
