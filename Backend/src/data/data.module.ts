import { Module } from '@nestjs/common';
import { MockCountryRepostory } from './mocks/mock-country.repository';
import { CountryRepository } from './repositories/country.repository';

@Module({
    providers: [MockCountryRepostory, CountryRepository],
    exports: [
        MockCountryRepostory, CountryRepository
    ]
})
export class DataModule {}
