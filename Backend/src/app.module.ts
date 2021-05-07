import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TodoModule } from './todo/todo.module';
import { WebModule } from './web/web.module';
import { CoreModule } from './core/core.module';
import { ApiModule } from './api/api.module';
import { DataModule } from './data/data.module';

@Module({
  imports: [TodoModule, WebModule, CoreModule, ApiModule, DataModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
