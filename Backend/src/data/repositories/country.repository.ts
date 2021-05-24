import { Injectable } from '@nestjs/common';
import { Country } from 'src/core/entities/country.entity';
import { IRepository } from 'src/core/interfaces/irepository.interface';

@Injectable()
export class CountryRepository implements IRepository<Country> {
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
    throw new Error('Not implemented');
  }
}