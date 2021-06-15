import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('Lesson')
export class LessonType {
  @Field((type) => ID)
  id: string;

  @Field()
  name: string;

  @Field({ nullable: true })
  startDate?: string;

  @Field({ nullable: true })
  endDate?: string;
}
