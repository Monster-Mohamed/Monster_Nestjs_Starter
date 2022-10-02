import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TestController } from '../controllers/test.controller';
import { TestService } from '../services/test.service';
import { TestEntity } from '../../database/entities/test.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TestEntity])], // Entities
  controllers: [TestController], // Controllers
  providers: [TestService], // Services
})
export class TestModule {}
