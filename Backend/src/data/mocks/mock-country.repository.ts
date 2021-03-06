import { Country } from 'src/core/entities/country.entity';
import { IRepo } from 'src/core/interfaces/irepository.interface';
import { countries } from './countries.mock';

export class MockCountryRepo implements IRepo<string, Country> {
  getByCode(countryCode: string): Country {
    return countries.find((c) => c.code == countryCode);
  }
  update(id: string, entity: Country) {
    throw new Error('Method not implemented.');
  }
  getById(id: string): Promise<Country> {
    throw new Error('Method not implemented.');
  }
  add(entity: Country) {
    throw new Error('Method not implemented.');
  }
  async getAll(): Promise<Country[]> {
    return countries;
  }
  delete(id: string) {
    throw new Error('Method not implemented.');
  }
}
