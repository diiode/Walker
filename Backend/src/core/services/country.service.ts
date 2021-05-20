import { Inject, Injectable } from '@nestjs/common';
import { Country } from '../entities/country.entity';
import { IRepository } from '../interfaces/irepository.interface';

@Injectable()
export class CountryService {
    constructor(@Inject('ICountryRepository') private countryRepository: IRepository<Country>) {}

    async getAll(): Promise<Country[]> {
        return await this.countryRepository.getAll();
    }
}
