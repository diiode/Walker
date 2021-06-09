import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Country } from 'src/core/entities/country.entity';
import { Route } from 'src/core/entities/route.entity';
import { MockCountryRepo } from './mocks/mock-country.repository';
import { CountryRepo } from './repositories/country.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Country, Route])],
  providers: [MockCountryRepo, CountryRepo],
  exports: [MockCountryRepo, CountryRepo],
})
export class DataModule {}
