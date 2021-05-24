import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateRouteDto {
  @ApiPropertyOptional()
  title?: string;

  @ApiPropertyOptional()
  description?: string;

  @ApiPropertyOptional()
  length?: number;

  @ApiPropertyOptional()
  link?: string;

  @ApiPropertyOptional()
  countryCode?: string;

  @ApiPropertyOptional()
  province?: string;

  @ApiPropertyOptional()
  difficulty?: number;
}
