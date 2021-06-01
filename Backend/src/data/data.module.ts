import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CountrySchema } from './entity-schemas/country.schema';
import { RouteSchema } from './entity-schemas/route.schema';
import { MockCountryRepostory } from './mocks/mock-country.repository';
import { CountryRepository } from './repositories/country.repository';

@Module({
  imports: [TypeOrmModule.forFeature([CountrySchema, RouteSchema])],
  providers: [MockCountryRepostory, CountryRepository],
  exports: [MockCountryRepostory, CountryRepository],
})
export class DataModule {}
