
import { Controller, Get, Post, Body, Req, Res, Param, Delete, Put } from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateItemDto } from './dto/create-item.dto';

@Controller('items')
export class ItemsController {
  @Get()
  findAll(@Req() req: Request, @Res() res: Response): Response {
    console.log(req.url);
    return res.send('All items');
  }

  @Get(':id')
  findOne(@Param() param): string {
    return `Item with id ${param.id}`;
  }

  @Post()
  create(@Body() createItemDto: CreateItemDto): string {
    return `Name: ${createItemDto.name}; Desc: ${createItemDto.description}`;
  }

  @Put(':id')
  update(@Body() updateItemDto: CreateItemDto, @Param('id') id: any): string {
    return `Item ${id} updated to ${updateItemDto.name}`;
  }

  @Delete(':id')
  delete(@Param('id') id): string {
    return `Item ${id} was removed`;
  }
}
