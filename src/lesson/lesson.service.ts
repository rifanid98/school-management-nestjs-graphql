import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Lesson } from './lesson.entity';
import { LessonInput } from './lesson.input';
import { v4 as uuid } from 'uuid';

@Injectable()
export class LessonService {
  constructor(
    @InjectRepository(Lesson)
    private lessonRepository: Repository<Lesson>,
  ) {}

  createLesson(lessonInput: LessonInput): Promise<Lesson> {
    const lesson = this.lessonRepository.create({
      id: uuid(),
      ...lessonInput,
    });

    return this.lessonRepository.save(lesson);
  }

  getLesson(id: string): Promise<Lesson> {
    return this.lessonRepository.findOne({ id });
  }

  getLessons(): Promise<Lesson[]> {
    return this.lessonRepository.find();
  }

  async assignStudentsToLesson(
    lessonId: string,
    studentIds: string[],
  ): Promise<Lesson> {
    const lesson = await this.lessonRepository.findOne({ id: lessonId });
    lesson.students = [...lesson.students, ...studentIds];
    return this.lessonRepository.save(lesson);
  }
}
