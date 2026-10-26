/* eslint-disable prettier/prettier */
import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ProductsService } from './products.service';


@Controller('products')
export class ProductsController {
    constructor(private readonly service: ProductsService) {}
    @Get()
    findall(){
        return this.service.findall();
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.service.findOne(id);
    }
}
