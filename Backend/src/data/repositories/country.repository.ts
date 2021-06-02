import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Country } from 'src/core/entities/country.entity';
import { IRepo } from 'src/core/interfaces/irepository.interface';
import { Repository } from 'typeorm';
import { CountrySchema } from '../entity-schemas/country.schema';

@Injectable()
export class CountryRepo implements IRepo<string, Country> {
  constructor(
    @InjectRepository(CountrySchema) private repository: Repository<Country>,
  ) {}
  update(id: string, entity: Country) {
    throw new Error('Method not implemented.');
  }
  getById(id: string): Promise<Country> {
    return this.repository.findOne({
      where: {
        code: id,
      },
    });
  }
  add(entity: Country) {
    throw new Error('Method not implemented.');
  }
  getAll(): Promise<Country[]> {
    return this.repository.find();
  }
}
