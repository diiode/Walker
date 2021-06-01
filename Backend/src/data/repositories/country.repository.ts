import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Country } from 'src/core/entities/country.entity';
import { IRepository } from 'src/core/interfaces/irepository.interface';
import { Repository } from 'typeorm';

@Injectable()
export class CountryRepository implements IRepository<string, Country> {
  constructor(
    @InjectRepository(Country) private repository: Repository<Country>,
  ) {}
  update(id: string, entity: Country) {
    throw new Error('Method not implemented.');
  }
  getById(id: string): Promise<Country> {
    return this.repository.findOne(id);
  }
  add(entity: Country) {
    throw new Error('Method not implemented.');
  }
  getAll(): Promise<Country[]> {
    return this.repository.find();
  }
}
