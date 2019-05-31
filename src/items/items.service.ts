
import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';

@Injectable()
export class ItemsService {
  private readonly items: Item[] = [
    {
      id: '338sstndfg6485613',
      name: 'one',
      description: 'this is one',
      qty: 100,
    },
    {
      id: '338451hdfhsdf5613',
      name: 'two',
      description: 'this is two',
      qty: 200,
    },
  ];

  findAll(): Item[] {
    return this.items;
  }

  findOne(id: string): Item {
    return this.items.find(item => item.id === id);
  }
}
