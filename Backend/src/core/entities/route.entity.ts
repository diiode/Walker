import { BaseEntity } from "./base.entity";
import { Country } from "./country.entity";
import { Province } from "./province.entity";

export class Route extends BaseEntity {
    id: number;
    dateTimeCreated: Date;
    title: string;
    description: string;
    length: number;
    link: string;
    country: Country;
    province: Province;
    status: RouteStatus;
    plannedDate: Date;
    doneDate: Date;
    rating: number;
    difficulty: number;
}

export enum RouteStatus {
    Added,
    Planned,
    Done
}
