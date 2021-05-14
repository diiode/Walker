import { Module } from '@nestjs/common';
import { CoreModule } from 'src/core/core.module';
import { CountryService } from 'src/core/services/country.service';
import { DataModule } from 'src/data/data.module';
import { MockCountryRepostory } from 'src/data/mocks/mock-country.repository';
import { CountryRepository } from 'src/data/repositories/country.repository';
import { CountriesController } from './countries/countries.controller';

@Module({
  controllers: [CountriesController],
  providers: [
    CountryService,
    {
      provide: CountryRepository,
      useClass: MockCountryRepostory
    }
  ],
  imports: [CoreModule, DataModule]
})
export class ApiModule {}
