import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post()
  async create(@Res() res, @Body() createStudentDto) {
    try {
      const student = await this.studentService.createStudent(createStudentDto);
      return res.status(HttpStatus.OK).json({
        message: 'Student has been created successfully',
        student,
      });
    } catch (error) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        message: 'Error: Student not created!',
        status: 400,
      });
    }
  }

  @Get()
  async getAll(@Res() res) {
    try {
      const students = await this.studentService.getStudents();
      return res.status(HttpStatus.OK).json(students);
    } catch (error) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        message: 'Error: Cannot find students!',
        status: 400,
      });
    }
  }

  @Get(':studentId')
  async get(@Res() res, @Param('studentId') studentId) {
    try {
      const student = await this.studentService.getStudent(studentId);
      if (!student) {
        return res.status(HttpStatus.BAD_REQUEST).json({
          message: 'Student does not exist!',
          status: 400,
        });
      }
      return res.status(HttpStatus.OK).json(student);
    } catch (error) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        message: 'Error: Cannot find student!',
        status: 400,
      });
    }
  }

  @Put(':studentId')
  async update(
    @Res() res,
    @Param('studentId') studentId,
    @Body() updateStudentDto,
  ) {
    try {
      const student = await this.studentService.updateStudent(
        studentId,
        updateStudentDto,
      );
      if (!student) {
        return res.status(HttpStatus.BAD_REQUEST).json({
          message: 'Student does not exist!',
          status: 400,
        });
      }
      return res.status(HttpStatus.OK).json({
        message: 'Student has been successfully updated',
        student,
      });
    } catch (error) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        message: 'Error: Student not updated!',
        status: 400,
      });
    }
  }

  @Delete(':studentId')
  async delete(@Res() res, @Param('studentId') studentId) {
    try {
      const student = await this.studentService.deleteStudent(studentId);
      if (!student) {
        return res.status(HttpStatus.BAD_REQUEST).json({
          message: 'Student does not exist!',
          status: 400,
        });
      }
      return res.status(HttpStatus.OK).json({
        message: 'Student has been deleted!',
        student,
      });
    } catch (error) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        message: 'Error: Student not deleted!',
        status: 400,
      });
    }
  }
}
