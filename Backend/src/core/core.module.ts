import { Module } from '@nestjs/common';
import { CountryService } from './services/country.service';

@Module({
  providers: [CountryService]
})
export class CoreModule {}
