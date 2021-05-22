import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Item } from './interfaces/item.interface';

@Injectable()
export class ItemsService {
  constructor(@InjectModel('Item') private readonly itemModel: Model<Item>) {}

  async findAll(): Promise<Item[]> {
    return this.itemModel.find();
  }

  async findOne(id: string): Promise<Item> {
    return this.itemModel.findOne({ _id: id });
  }

  async createItem(item: Item): Promise<Item> {
    const newItem = new this.itemModel(item);
    return newItem.save();
  }

  async deleteItem(id: string): Promise<Item> {
    return this.itemModel.findByIdAndRemove(id);
  }

  async updateItem(id: string, item: Item): Promise<Item> {
    return this.itemModel.findByIdAndUpdate(id, item, { new: true });
  }
}
