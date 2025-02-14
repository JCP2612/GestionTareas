import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Body,
  Param,
  ConflictException,
  NotFoundException,
  HttpCode,
} from '@nestjs/common';
import { TareasService } from '../tasks/tareas.service';
import { CreateTaskDto } from 'src/Modules/tasks/dto/create-task.dto';
import { UpdateTaskDto } from 'src/Modules/tasks/dto/update-task.dto';
import { MoongoseError } from './interface/mongoose-error.interface';

@Controller('tareas')
export class TareasController {
  constructor(private tareasService: TareasService) {}
  @Get()
  findAll() {
    return this.tareasService.findAll();
  }
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const taskfind = await this.tareasService.findOne(id);
    if (!taskfind) throw new NotFoundException('Tarea no encontrada');
    return taskfind;
  }
  @Post()
  async create(@Body() body: CreateTaskDto) {
    try {
      return await this.tareasService.create(body);
    } catch (error) {
      const mongoError = error as MoongoseError;
      if (mongoError.code === 11000) {
        throw new ConflictException('La tarea ya existe');
      }
      throw error;
    }
  }
  @Delete(':id')
  @HttpCode(204)
  async delete(@Param('id') id: string) {
    const taskDelete = await this.tareasService.delete(id);
    if (!taskDelete) throw new NotFoundException('Tarea no encontrada');
    return taskDelete;
  }
  @Put(':id')
  async update(@Param('id') id: string, @Body() body: UpdateTaskDto) {
    const taskUpdate = await this.tareasService.update(id, body);
    if (!taskUpdate) throw new NotFoundException('Tarea no encontrada');
    return taskUpdate;
  }
}
