import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { gqlModuleOptions } from './configs/graphql.config';
import { typeOrmModuleOptions } from './configs/typeorm.config';
import { LessonModule } from './lesson/lesson.module';
import { StudentModule } from './student/student.module';

@Module({
  imports: [
    GraphQLModule.forRoot(gqlModuleOptions),
    TypeOrmModule.forRoot(typeOrmModuleOptions),
    LessonModule,
    StudentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
