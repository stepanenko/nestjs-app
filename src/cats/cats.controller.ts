
import { Controller, Get, Post, Body, Query, Param, Put, Delete } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { CreateCatDto } from './create-cat.dto';

@Controller('cats')
export class CatsController {
  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    return 'This action adds a new cat';
  }

  // @Get()
  // async findAll(): Promise<any[]> {
  //   return ['An array with all cats'];
  // }

  @Get()
  findAll(@Query() query: ListAllEntities): Observable<any[]> {
    return of([`An array with all cats (limit: ${query.limit} items`]);
  }

  
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
  delete(@Param() id: string) {
    return `This action removes #${id} cat`;
  }
}
