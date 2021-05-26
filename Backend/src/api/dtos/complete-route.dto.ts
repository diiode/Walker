import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, Max, Min } from 'class-validator';

export class CompleteRouteDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  @Min(0)
  @Max(5)
  rating: number;
}
