import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CountryService } from 'src/core/services/country.service';

@ApiTags('countries')
@Controller('countries')
export class CountriesController {
  constructor(private readonly countryService: CountryService) {}

  @Get()
  async list() {
    return await this.countryService.getAll();
  }
}
