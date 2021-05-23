import { Country } from 'src/core/entities/country.entity';
import { ICountryRepository } from 'src/core/interfaces/icountry-repository.interface';
import { countries } from './countries.mock';

export class MockCountryRepostory implements ICountryRepository {
  getByCode(countryCode: string): Country {
    return countries.find((c) => c.code == countryCode);
  }
  update(id: number, entity: Country) {
    throw new Error('Method not implemented.');
  }
  getById(id: number): Promise<Country> {
    throw new Error('Method not implemented.');
  }
  add(entity: Country) {
    throw new Error('Method not implemented.');
  }
  async getAll(): Promise<Country[]> {
    return countries;
  }
}
