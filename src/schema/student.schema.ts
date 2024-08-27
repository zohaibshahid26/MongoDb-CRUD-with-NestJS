import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
@Schema()
export class Student {
  @Prop({
    required: true,
  })
  name: string;
  @Prop()
  age: number;
  @Prop({
    required: true,
  })
  rollno: string;

  @Prop()
  cgpa: number;
}

const StudentSchema = SchemaFactory.createForClass(Student);
export default StudentSchema;
