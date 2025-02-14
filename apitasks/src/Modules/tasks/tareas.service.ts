import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task } from 'src/Modules/tasks/schemas/task.schema';
import { CreateTaskDto } from 'src/Modules/tasks/dto/create-task.dto';
import { UpdateTaskDto } from 'src/Modules/tasks/dto/update-task.dto';

@Injectable()
export class TareasService {
  constructor(@InjectModel(Task.name) private taskModel: Model<Task>) {}

  async create(createTask: CreateTaskDto) {
    const newTask = new this.taskModel(createTask);
    return newTask.save();
  }

  async findAll(): Promise<Task[]> {
    return this.taskModel.find();
  }

  async findOne(id: string) {
    return this.taskModel.findById(id);
  }

  async update(id: string, task: UpdateTaskDto) {
    return this.taskModel.findByIdAndUpdate(id, task, { new: true });
  }

  async delete(id: string) {
    return this.taskModel.findByIdAndDelete(id);
  }
}
