import { Controller, Get, Render } from '@nestjs/common';

@Controller('web')
export class WebController {
  @Get()
  @Render('index')
  root() {
    return { message: 'Home page' };
  }
}
