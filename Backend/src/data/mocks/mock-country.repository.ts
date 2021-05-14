import { Country } from "src/core/entities/country.entity";
import { IRepository } from "src/core/interfaces/irepository.interface";
import { countries } from "./countries.mock";

export class MockCountryRepostory implements IRepository<Country> {
    async getAll(): Promise<Country[]> {
        return countries;
    }    
}