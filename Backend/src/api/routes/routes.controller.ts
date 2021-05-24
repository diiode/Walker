import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { plainToClass } from 'class-transformer';
import { RouteService } from 'src/core/services/route.service';
import { CompleteRouteDto } from '../dtos/complete-route.dto';
import { CreateRouteDto } from '../dtos/create-route.dto';
import { PlanRouteDto } from '../dtos/plan-route.dto';
import { RouteResultDto } from '../dtos/route.dto';
import { UpdateRouteDto } from '../dtos/update-route.dto';

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
  async getAll() {
    const routes = await this.routeService.getAll();
    return plainToClass(RouteResultDto, routes);
  }

  @Get(':id')
  getById(@Param('id') id: number) {
    const route = this.routeService.getById(id);
    return plainToClass(RouteResultDto, route);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateRouteDto: UpdateRouteDto,
  ) {
    await this.routeService.update(id, { ...updateRouteDto });
  }

  @Post(':id/plan')
  async plan(@Param('id') id: number, @Body() planRouteDto: PlanRouteDto) {
    return await this.routeService.plan(id, planRouteDto.plannedDate);
  }

  @Post(':id/complete')
  async complete(
    @Param('id') id: number,
    @Body() completeRouteDto: CompleteRouteDto,
  ) {
    return await this.routeService.complete(id, completeRouteDto.rating);
  }
}
