import { Field, InputType } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';

@InputType()
export class StudentInput {
  @Field()
  firstName: string;

  @IsOptional()
  @Field({ nullable: true })
  lastName?: string;
}
