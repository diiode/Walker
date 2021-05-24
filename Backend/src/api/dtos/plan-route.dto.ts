import { ApiProperty } from '@nestjs/swagger';

export class PlanRouteDto {
  @ApiProperty()
  plannedDate: Date;
}
