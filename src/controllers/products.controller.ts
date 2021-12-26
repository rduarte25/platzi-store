import {
  Controller,
  Get,
  Param,
  Post,
  Query,
  Body,
  Put,
  Delete,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';

import { ParseIntPipe } from 'src/common/parse-int.pipe';
import { CreateProductDto, UpdateProductDto } from 'src/dtos/products.dtos';
import { ProductsService } from 'src/services/products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get('')
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    //return {
    //  message: `products ${limit} - ${offset} - ${brand}`,
    //};
    return this.productsService.findAll();
  }

  @Get('filter')
  getProductsFilter() {
    return {
      message: `product filter route`,
    };
  }

  @Get(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  getProduct(@Param('id', ParseIntPipe) id: number) {
    //response.status(202).send({
    //  message: `product ${id}`,
    //});
    return this.productsService.findOne(id);
  }

  @Post()
  create(@Body() payload: CreateProductDto) {
    //return {
    //  message: 'acción de crear',
    //  payload: payload,
    //};
    return this.productsService.create(payload);
  }
  @Put(':id')
  update(@Param('id') id: number, @Body() payload: UpdateProductDto) {
    //return {
    //  message: 'accion de editar',
    //  payload: payload,
    //  id: id,
    //};
    return this.productsService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    /* return {
      id: id,
    }; */
    return this.productsService.remove(id);
  }
}
