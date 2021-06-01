import { Module } from '@nestjs/common';
import { MockCountryRepository } from 'src/data/mocks/mock-country.repository';
import { CountryRepository } from 'src/data/repositories/country.repository';
import { MockRouteRepository } from 'src/data/mocks/mock-route.repository';
import { CountryService } from './services/country.service';
import { RouteService } from './services/route.service';

@Module({
  providers: [
    // {
    //   provide: 'ICountryRepository',
    //   useClass: MockCountryRepostory,
    // },
    {
      provide: 'ICountryRepository',
      useClass: CountryRepository,
    },
    {
      provide: 'IRouteRepository',
      useClass: MockRouteRepository,
    },
    CountryService,
    RouteService,
  ],
  exports: [CountryService, RouteService],
})
export class CoreModule {}
