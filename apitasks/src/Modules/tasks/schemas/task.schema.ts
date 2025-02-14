import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Priority } from '../enums/priority.enum';

@Schema({
  timestamps: true,
})
export class Task {
  @Prop({ unique: true, required: true, trim: true })
  title!: string;
  @Prop({ trim: true })
  description!: string;
  @Prop({ required: true, enum: Priority, default: Priority.LOW })
  priority!: Priority;
  @Prop({ default: false })
  complete!: boolean;
}
export const TaskSchema = SchemaFactory.createForClass(Task);
