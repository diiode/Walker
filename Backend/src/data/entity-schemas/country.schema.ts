import { Country } from 'src/core/entities/country.entity';
import { EntitySchema } from 'typeorm';

export const CountrySchema = new EntitySchema<Country>({
  name: 'country',
  // target: Country,
  columns: {
    code: {
      type: String,
      primary: true,
    },
    name: {
      type: String,
    },
  },
});
