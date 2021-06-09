import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsDateString, IsNotEmpty } from 'class-validator';

export class PlanRouteDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsDateString()
  plannedDate: Date;
}
