import { Injectable } from '@nestjs/common';
import { Country } from '../entities/country.entity';
import { IRepository } from '../interfaces/irepository.interface';

@Injectable()
export class CountryService {
    constructor(private countryRepository: IRepository<Country>) {

    }

    async getAll() : Promise<Country[]> {
        return this.countryRepository.getAll();
    } 
}
