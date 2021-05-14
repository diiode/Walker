import { Controller, Get } from '@nestjs/common';
import { CountryService } from 'src/core/services/country.service';

@Controller('countries')
export class CountriesController {
    constructor (private readonly countryService: CountryService) {}

    @Get()
    async list() {
        return await this.countryService.getAll();
    }
}
