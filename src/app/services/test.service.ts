import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TestEntity } from '../../database/entities/test.entity';

@Injectable()
export class TestService {
  constructor(
    @InjectRepository(TestEntity)
    private readonly Test: Repository<TestEntity>,
  ) {}
  
  async findAll(): Promise<any[]> {
    return this.Test.find();
  }
  
  async create(test: any): Promise<any> {
    const t = new this.Test();
    Object.assign(t, test);
    await this.Test.save();
    return t;
  }
}