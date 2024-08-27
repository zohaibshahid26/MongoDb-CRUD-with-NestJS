import { Document } from 'mongoose';

export interface IStudent extends Document {
  readonly name: string;
  readonly age: number;
  readonly rollno: string;
  readonly cgpa: number;
}
