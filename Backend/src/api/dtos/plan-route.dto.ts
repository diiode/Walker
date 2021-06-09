import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNotEmpty } from 'class-validator';

export class PlanRouteDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsDateString()
  plannedDate: Date;
}
