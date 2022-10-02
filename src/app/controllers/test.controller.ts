import { Get, Post, Body } from '@nestjs/common';
import { Controller } from '@nestjs/common/decorators';
import { TestService } from '../services/test.service';
import { TestDto } from '../dto/test.dto';

@Controller('Tests')
export class TestController {
  constructor(private readonly TestService: TestService) {}

  @Get()
  async getTests(): Promise<any> {
    return this.TestService.findAll();
  }

  @Post()
  async createTest(@Body('test') test: TestDto): Promise<any> {
    return this.TestService.create(test);
  }

}