import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { gqlModuleOptions } from './configs/graphql.config';
import { LessonModule } from './lesson/lesson.module';

@Module({
  imports: [GraphQLModule.forRoot(gqlModuleOptions), LessonModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
