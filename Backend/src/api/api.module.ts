import { Module } from '@nestjs/common';
import { CoreModule } from 'src/core/core.module';
import { CountryService } from 'src/core/services/country.service';
import { DataModule } from 'src/data/data.module';
import { MockCountryRepo } from 'src/data/mocks/mock-country.repository';
import { CountriesController } from './countries/countries.controller';
import { RoutesController } from './routes/routes.controller';

@Module({
  controllers: [CountriesController, RoutesController],
  imports: [CoreModule, DataModule],
})
export class ApiModule {}
