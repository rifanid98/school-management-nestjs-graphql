import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { Student } from './student.entity';
import { StudentInput } from './student.input';
import { StudentService } from './student.service';
import { StudentType } from './student.type';

@Resolver((of) => StudentType)
export class StudentResolver {
  constructor(private studentService: StudentService) {}

  @Mutation((returns) => StudentType)
  createStudent(
    @Args('studentInput') studentInput: StudentInput,
  ): Promise<Student> {
    return this.studentService.createStudent(studentInput);
  }
}
