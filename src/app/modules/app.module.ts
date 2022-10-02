import { Module } from '@nestjs/common';
import { AppController } from '@app/app/controllers/app.controller';
import { AppService } from '@app/app/services/app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import ormConfig from '@app/ormconfig';
import { ConfigModule } from '@nestjs/config';
import { TestModule } from './test.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(ormConfig),
    ConfigModule.forRoot(),
    TestModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
