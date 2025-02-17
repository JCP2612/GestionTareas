import { Module } from '@nestjs/common';
import { AuthModule } from './Modules/auth/auth.module';
import { UsersModule } from './Modules/users/users.module';
import { TareasModule } from './Modules/tasks/tareas.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/dbtasks'),
    TareasModule,
    AuthModule,
    UsersModule,
  ],
})
export class AppModule {}
