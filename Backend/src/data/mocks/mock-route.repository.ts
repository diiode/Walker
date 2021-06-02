import { Route } from 'src/core/entities/route.entity';
import { IRepo } from 'src/core/interfaces/irepository.interface';
import { routes } from './routes.mock';

export class MockRouteRepo implements IRepo<number, Route> {
  private routeStore: Route[] = routes;
  private routeStoreCounter = 2;

  async getAll(): Promise<Route[]> {
    return this.routeStore;
  }

  async getById(id: number): Promise<Route> {
    return this.routeStore.find((r) => r.id == id);
  }

  add(newRoute: Route) {
    newRoute.id = this.routeStoreCounter;

    this.routeStore.push(newRoute);
    this.routeStoreCounter = this.routeStoreCounter++;
  }

  update(id: number, entity: Route) {
    const index = this.routeStore.findIndex((r) => r.id == id);
    this.routeStore[index] = entity;
  }
}
