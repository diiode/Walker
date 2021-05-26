import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNotEmpty } from 'class-validator';

export class PlanRouteDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsDate()
  plannedDate: Date;
}
