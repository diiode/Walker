import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TodoModule } from './todo/todo.module';
import { WebModule } from './web/web.module';
import { CoreModule } from './core/core.module';
import { ApiModule } from './api/api.module';
import { DataModule } from './data/data.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TodoModule,
    WebModule,
    CoreModule,
    ApiModule,
    DataModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db',
      entities: [
        __dirname + '/**/*.entity{.ts,.js}',
        __dirname + '/**/*.schema{.ts,.js}',
      ],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
