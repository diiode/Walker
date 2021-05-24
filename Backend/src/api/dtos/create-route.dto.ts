import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateRouteDto {
  @ApiProperty()
  title: string;

  @ApiPropertyOptional()
  description: string;

  @ApiProperty()
  length: number;

  @ApiProperty()
  link: string;

  @ApiProperty()
  countryCode: string;

  @ApiPropertyOptional()
  province: string;

  @ApiProperty()
  difficulty: number;
}
