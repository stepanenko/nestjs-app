
import { Controller, Get, Post, Body, Query, Param, Put, Delete } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { CreateCarsDto, UpdateCarsDto } from './dto';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Post()
  async create(@Body() createCarDto: CreateCarsDto) {
    return this.carsService.create(createCarDto);
  }

  @Get()
  async findAll(): Promise<any[]> {
    return this.carsService.findAll();
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
  update(@Param('id') id: string, @Body() updateCarsDto: UpdateCarsDto) {
    return `This action updates a #${id} cat`;
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return `This action removes #${id} cat`;
  }
}
