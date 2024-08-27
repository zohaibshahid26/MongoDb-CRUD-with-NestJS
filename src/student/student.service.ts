import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IStudent } from 'src/Interface/student.interface';
import { Model } from 'mongoose';

@Injectable()
export class StudentService {
  constructor(
    @InjectModel('Student') private readonly studentModel: Model<IStudent>,
  ) {}
  async createStudent(student: IStudent): Promise<IStudent> {
    const newStudent = new this.studentModel(student);
    return newStudent.save();
  }
  async getStudents(): Promise<IStudent[]> {
    return this.studentModel.find();
  }
  async getStudent(studentId: string): Promise<IStudent> {
    return this.studentModel.findById(studentId);
  }
  async updateStudent(studentId: string, student: IStudent): Promise<IStudent> {
    return await this.studentModel.findByIdAndUpdate(studentId, student, {
      new: true,
    });
  }

  async deleteStudent(studentId: string): Promise<IStudent> {
    return this.studentModel.findByIdAndDelete(studentId);
  }
}
