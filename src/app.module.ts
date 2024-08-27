import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentController } from './student/student.controller';
import { StudentService } from './student/student.service';
import { StudentModule } from './student/student.module';
import { MongooseModule } from '@nestjs/mongoose';
import StudentSchema from './schema/student.schema';

@Module({
  imports: [
    StudentModule,
    MongooseModule.forRoot(
      'mongodb+srv://zohaibshahid200:Bt7iINo9TqZFGXbK@mycluster.xlvns.mongodb.net',
      {
        dbName: 'studentDB',
      },
    ),
    MongooseModule.forFeature([
      {
        name: 'Student',
        schema: StudentSchema,
      },
    ]),
  ],
  controllers: [AppController, StudentController],
  providers: [AppService, StudentService],
})
export class AppModule {}
