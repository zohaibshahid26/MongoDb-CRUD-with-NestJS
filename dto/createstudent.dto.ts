import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';

export class CreateStudentDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(30)
  name: string;

  @IsNumber()
  age: number;

  @IsString()
  @IsNotEmpty()
  rollno: string;

  @IsNumber()
  cgpa: number;
}
