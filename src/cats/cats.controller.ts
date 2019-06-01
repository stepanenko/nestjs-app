
import { Controller, Get, Post, Body, Query, Param, Put, Delete } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { CreateCatDto, UpdateCatDto } from './dto';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    return this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<any[]> {
    return this.catsService.findAll();
  }

  // @Get()
  // findAll(): Observable<any[]> {
  //   return of(['An array with all cats']);
  // }

  @Get(':id')
  findOne(@Param('id') id: string) {
    console.log(id);
    return `This action returns a #${id} cat`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat`;
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return `This action removes #${id} cat`;
  }
}
