import { Field, InputType } from '@nestjs/graphql';
import { IsDateString, IsEmpty, IsOptional, MinLength } from 'class-validator';

@InputType()
export class LessonInput {
  @MinLength(1)
  @Field()
  name: string;

  @IsOptional()
  @IsDateString()
  @Field({ nullable: true })
  startDate?: string;

  @IsDateString()
  @IsOptional()
  @Field({ nullable: true })
  endDate?: string;
}
