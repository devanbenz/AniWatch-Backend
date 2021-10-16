import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiController } from './api/api.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { favs } from './favorites/favs.entity';
import { Connection } from 'typeorm';
import { favService } from './favorites/favs.service';
import { favModule } from './favorites/favs.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'defaultea9403b.cb8jptmfjmww.us-east-1.rds.amazonaws.com',
      port: 5432,
      username: 'dev',
      password: 'Tadashi123',
      database: 'anidb',
      entities: [favs],
      synchronize: true
    }),
    favModule
  ],
  controllers: [AppController, ApiController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection){}
}

