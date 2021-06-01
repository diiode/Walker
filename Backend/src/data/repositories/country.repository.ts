import { Injectable } from '@nestjs/common';
import { Country } from 'src/core/entities/country.entity';
import { IRepository } from 'src/core/interfaces/irepository.interface';

@Injectable()
export class CountryRepository implements IRepository<string, Country> {
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
    throw new Error('Not implemented');
  }
}
