import { Module } from '@nestjs/common';
import { TareasModule } from './Modules/tasks/tareas.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/dbtasks'),
    TareasModule,
  ],
})
export class AppModule {}
