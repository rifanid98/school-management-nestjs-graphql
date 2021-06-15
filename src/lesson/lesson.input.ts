import { Field, ID, InputType } from '@nestjs/graphql';
import { IsDateString, IsOptional, IsUUID, MinLength } from 'class-validator';

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

  @IsUUID('4', { each: true })
  @Field(() => [ID], { defaultValue: [] })
  students: string[];
}
