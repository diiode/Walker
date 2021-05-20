import { Module } from '@nestjs/common';
import { MockCountryRepostory } from 'src/data/mocks/mock-country.repository';
import { MockRouteRepository } from 'src/data/mocks/mock-route.repository';
import { CountryService } from './services/country.service';
import { RouteService } from './services/route.service';

@Module({
  providers: [CountryService,
  // {
  //   provide: 'IRepository',
  //   useValue: MockCountryRepostory
  // }
  {
    provide: 'ICountryRepository',
    useClass: MockCountryRepostory
  },
  {
    provide: 'IRouteRepository',
    useClass: MockRouteRepository
  },
  RouteService
  ],
  exports: [CountryService, RouteService]
})
export class CoreModule {}
