import { Module } from '@nestjs/common';
import { MockCountryRepostory } from './data/mocks/mock-country.repository';
import { CountryRepository } from './data/repositories/country.repository';
import { CountryService } from './services/country.service';

@Module({
  providers: [CountryService,
  // {
  //   provide: 'IRepository',
  //   useValue: MockCountryRepostory
  // }
  {
    provide: 'IRepository',
    useClass: MockCountryRepostory
  }
  ],
  exports: [CountryService]
})
export class CoreModule {}
