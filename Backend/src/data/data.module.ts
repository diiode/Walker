import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CountrySchema } from './entity-schemas/country.schema';
import { RouteSchema } from './entity-schemas/route.schema';
import { MockCountryRepo } from './mocks/mock-country.repository';
import { CountryRepo } from './repositories/country.repository';

@Module({
  imports: [TypeOrmModule.forFeature([CountrySchema, RouteSchema])],
  providers: [MockCountryRepo, CountryRepo],
  exports: [MockCountryRepo, CountryRepo],
})
export class DataModule {}
