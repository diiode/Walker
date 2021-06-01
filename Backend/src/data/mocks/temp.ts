import { countries } from './countries.mock';

countries.forEach((country) => {
  console.log(
    `INSERT INTO Country (code, name) VALUES('${
      country.code
    }','${country.name.replace("'", "''")}');`,
  );
});
