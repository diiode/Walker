import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TodoModule } from './todo/todo.module';
import { WebModule } from './web/web.module';

@Module({
  imports: [TodoModule, WebModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
