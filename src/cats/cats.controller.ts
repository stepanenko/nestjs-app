
import { Controller, Get, Post, Param } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Post()
  create(): string {
    return 'This action adds a new cat';
  }

  @Get()
  async findAll(): Promise<any[]> {
    return ['An array with all cats'];
  }

  @Get(':id')
  findOne(@Param() params): string {
    console.log(params.id);
    return `This action return a #${params.id} cat`;
  }
}
