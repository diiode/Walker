import { ApiProperty } from '@nestjs/swagger';

export class CompleteRouteDto {
  @ApiProperty()
  rating: number;
}
