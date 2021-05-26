import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  Max,
  MaxLength,
  Min,
} from 'class-validator';

export class CreateRouteDto {
  @ApiProperty()
  @IsNotEmpty()
  @MaxLength(50)
  title: string;

  @ApiPropertyOptional()
  @IsOptional()
  @MaxLength(500)
  description?: string;

  @ApiProperty()
  @IsNumber()
  length: number;

  @ApiProperty()
  @IsNotEmpty()
  @MaxLength(100)
  link: string;

  @ApiProperty()
  @IsNotEmpty()
  countryCode: string;

  @ApiPropertyOptional()
  @IsOptional()
  @MaxLength(100)
  province?: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  @Min(1)
  @Max(5)
  difficulty: number;
}
