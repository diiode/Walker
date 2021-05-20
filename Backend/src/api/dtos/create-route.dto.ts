import { Country } from "src/core/entities/country.entity";

export class CrouteRouteDto {
    title: string;
    description: string;
    length: number;
    link: string;
    country: Country
    province: string;
    difficulty: number;
}