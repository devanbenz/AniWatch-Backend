import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiController } from './api/api.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { UsersModule } from './users/users.module';
import { Users } from './users/users.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'ec2-35-169-176-6.compute-1.amazonaws.com',
      port: 5432,
      username: 'dev',
      password: 'Tadashi123',
      database: 'anidb',
      entities: [Users],
      synchronize: true
    }),
    UsersModule
  ],
  controllers: [AppController, ApiController],
  providers: [AppService],
})
export class AppModule {}

