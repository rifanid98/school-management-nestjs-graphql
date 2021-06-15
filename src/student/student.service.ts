import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './student.entity';
import { StudentInput } from './student.input';
import { v4 as uuid } from 'uuid';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private studentRepository: Repository<Student>,
  ) {}

  createStudent(studentInput: StudentInput): Promise<Student> {
    const student = this.studentRepository.create({
      id: uuid(),
      ...studentInput,
    });

    return this.studentRepository.save(student);
  }
}
