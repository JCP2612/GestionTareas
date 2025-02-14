import { Module } from '@nestjs/common';
import { TareasController } from './tareas.controller';
import { TareasService } from './tareas.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Task, TaskSchema } from 'src/Modules/tasks/schemas/task.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Task.name,
        schema: TaskSchema,
      },
    ]),
  ],
  controllers: [TareasController],
  providers: [TareasService],
})
export class TareasModule {}
