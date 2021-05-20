import { Route } from "src/core/entities/route.entity";
import { IRepository } from "src/core/interfaces/irepository.interface";

export class MockRouteRepository implements IRepository<Route> {
    getAll(): Promise<Route[]> {
        throw new Error("Method not implemented.");
    }

    add(newRoute: Route) {

    }
}