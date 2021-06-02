import { ApiProperty } from '@nestjs/swagger';

export class CountryResultDto {
  @ApiProperty()
  code: string;

  @ApiProperty()
  name: string;
}
