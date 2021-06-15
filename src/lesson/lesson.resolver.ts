import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Lesson } from './lesson.entity';
import { LessonInput } from './lesson.input';
import { LessonService } from './lesson.service';
import { LessonType } from './lesson.type';

@Resolver((of) => LessonType)
export class LessonResolver {
  constructor(private lessonService: LessonService) {}

  @Query((returns) => LessonType)
  lesson(@Args('id') id: string): Promise<Lesson> {
    return this.lessonService.getLesson(id);
  }

  @Query((returns) => [LessonType])
  lessons(): Promise<Lesson[]> {
    return this.lessonService.getLessons();
  }

  @Mutation((returns) => LessonType)
  createLesson(@Args('lessonInput') lessonInput: LessonInput): Promise<Lesson> {
    return this.lessonService.createLesson(lessonInput);
  }
}
