import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { RouteService } from 'src/core/services/route.service';
import { CrouteRouteDto } from '../dtos/create-route.dto';

@ApiTags('routes')
@Controller('routes')
export class RoutesController {
    constructor(private routeService: RouteService) { }

    @Post()
    create(@Body() createRouteDto: CrouteRouteDto) {
        this.routeService.createRoute(createRouteDto);
    }
}
