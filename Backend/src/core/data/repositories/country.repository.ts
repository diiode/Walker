import { Injectable } from "@nestjs/common";
import { Country } from "src/core/entities/country.entity";
import { IRepository } from "src/core/interfaces/irepository.interface";

@Injectable()
export class CountryRepository implements IRepository<Country> {
    async getAll(): Promise<Country[]> {
        throw new Error("Not implemented")
    }   
}