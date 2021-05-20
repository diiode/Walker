import { Country } from "src/core/entities/country.entity";
import { IRepository } from "src/core/interfaces/irepository.interface";
import { countries } from "./countries.mock";

export class MockCountryRepostory implements IRepository<Country> {
    add(entity: Country) {
        throw new Error("Method not implemented.");
    }
    async getAll(): Promise<Country[]> {
        return countries;
    }    
}