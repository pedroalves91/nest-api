import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { Item } from './interfaces/item.interface';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  findAll(): Promise<Item[]> {
    return this.itemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id): Promise<Item> {
    return this.itemsService.findOne(id);
  }

  @Post()
  createItem(@Body() createItemDto: CreateItemDto): Promise<Item> {
    return this.itemsService.createItem(createItemDto);
  }

  @Delete(':id')
  deleteItem(@Param('id') id): Promise<Item> {
    return this.itemsService.deleteItem(id);
  }

  @Put(':id')
  updateItem(
    @Body() updateItemDto: CreateItemDto,
    @Param('id') id,
  ): Promise<Item> {
    return this.itemsService.updateItem(id, updateItemDto);
  }
}
