import { Country } from '../entities/country.entity';
import { IRepository } from './irepository.interface';

export interface ICountryRepository extends IRepository<Country> {
  getByCode(countryCode: string): Country;
}
