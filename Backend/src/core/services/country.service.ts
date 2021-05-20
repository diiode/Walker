import { Inject, Injectable } from '@nestjs/common';
import { MockCountryRepostory } from '../data/mocks/mock-country.repository';
import { Country } from '../entities/country.entity';
import { IRepository } from '../interfaces/irepository.interface';
import { CountryRepository } from '../data/repositories/country.repository';

@Injectable()
export class CountryService {
    constructor(@Inject('IRepository') private countryRepository: IRepository<Country>) {

    }

    // async getAll() : Promise<Country[]> {
    //     return await this.countryRepository.getAll();
    // } 

    // constructor(private countryRepository: CountryRepository) { }

    async getAll(): Promise<Country[]> {
        return await this.countryRepository.getAll();
    }
}
