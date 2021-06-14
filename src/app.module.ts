import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { gqlModuleOptions } from './configs/graphql.config';

@Module({
  imports: [GraphQLModule.forRoot(gqlModuleOptions)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
