import { BaseEntity } from "./base.entity";
import { Country } from "./country.entity";

export class Province extends BaseEntity {
    id: number;
    name: string;
    country: Country;
}
