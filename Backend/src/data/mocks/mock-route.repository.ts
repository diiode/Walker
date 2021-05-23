import { Route } from "src/core/entities/route.entity";
import { IRepository } from "src/core/interfaces/irepository.interface";

export class MockRouteRepository implements IRepository<Route> {
    private routeStore: Route[] = [];
    private routeStoreCounter = 1;
    
    getAll(): Promise<Route[]> {
        throw new Error("Method not implemented.");
    }

    add(newRoute: Route) {
        newRoute.id = this.routeStoreCounter;

        this.routeStore.push(newRoute);
        this.routeStoreCounter = this.routeStoreCounter++;
    }

    getById(id: number) {
        return this.routeStore.find(r => r.id === id);
    }
}