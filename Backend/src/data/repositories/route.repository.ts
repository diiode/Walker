import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Route } from 'src/core/entities/route.entity';
import { IRepo } from 'src/core/interfaces/irepository.interface';
import { Repository } from 'typeorm';
import { RouteSchema } from '../entity-schemas/route.schema';

@Injectable()
export class RouteRepo implements IRepo<number, Route> {
  constructor(
    @InjectRepository(RouteSchema) private repository: Repository<Route>,
  ) {}

  getAll(): Promise<Route[]> {
    return this.repository.find({ relations: ['country'] });
  }

  getById(id: number): Promise<Route> {
    return this.repository.findOne({
      where: { id: id },
      relations: ['country'],
    });
  }

  add(entity: Route) {
    return this.repository.save(entity);
  }

  update(id: number, entity: Partial<Route>) {
    return this.repository.update(id, entity);
  }
}
