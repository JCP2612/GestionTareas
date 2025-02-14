import {
  IsString,
  IsBoolean,
  IsOptional,
  IsNotEmpty,
  IsEnum,
} from 'class-validator';
import { Priority } from '../enums/priority.enum';

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  title!: string;
  @IsString()
  @IsOptional()
  description?: string;
  @IsEnum(Priority)
  @IsNotEmpty()
  priority!: Priority;
  @IsBoolean()
  @IsOptional()
  complete?: boolean;
}
