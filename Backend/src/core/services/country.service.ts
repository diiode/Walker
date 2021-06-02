import { Inject, Injectable } from '@nestjs/common';
import { Country } from '../entities/country.entity';
import { IRepo } from '../interfaces/irepository.interface';

@Injectable()
export class CountryService {
  constructor(
    @Inject('ICountryRepo')
    private countryRepository: IRepo<string, Country>,
  ) {}

  async getAll(): Promise<Country[]> {
    return await this.countryRepository.getAll();
  }
}
