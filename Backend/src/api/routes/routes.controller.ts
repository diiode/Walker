import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { RouteService } from 'src/core/services/route.service';
import { CreateRouteDto } from '../dtos/create-route.dto';
import { PlanRouteDto } from '../dtos/plan-route.dto';

@ApiTags('routes')
@Controller('routes')
export class RoutesController {
  constructor(private routeService: RouteService) {}

  @Post()
  create(@Body() createRouteDto: CreateRouteDto) {
    this.routeService.createRoute(
      createRouteDto.title,
      createRouteDto.description,
      createRouteDto.length,
      createRouteDto.link,
      createRouteDto.countryCode,
      createRouteDto.province,
      createRouteDto.difficulty,
    );
  }

  @Get()
  getAll() {
    return this.routeService.getAll();
  }

  @Get(':id')
  getById(@Param('id') id: number) {
    return this.routeService.getById(id);
  }

  @Post(':id/plan')
  plan(@Param('id') id: number, @Body() planRouteDto: PlanRouteDto) {
    return this.routeService.plan(id, planRouteDto.plannedDate);
  }
}
