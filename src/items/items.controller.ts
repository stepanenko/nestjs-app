
import { Controller, Get, Post, Body, Req, Res, Param, Delete, Put } from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateItemDto } from './dto/create-item.dto';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  // findAll(@Req() req: Request, @Res() res: Response): Response {
  //   console.log(req.url);
  //   return res.send('All items');
  // }
  findAll(): Promise<Item[]> {
    return this.itemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id): Promise<Item> {
    return this.itemsService.findOne(id);
  }

  @Post()
  create(@Body() item: Item): Promise<Item> {
    return this.itemsService.create(item);
    // return `Name: ${createItemDto.name}; Desc: ${createItemDto.description}`;
  }

  @Put(':id')
  update(@Body() updateItemDto: CreateItemDto, @Param('id') id: any): string {
    return `Item ${id} updated to ${updateItemDto.name}`;
  }

  @Delete(':id')
  delete(@Param('id') id): Promise<Item> {
    return this.itemsService.delete(id);
  }
}
