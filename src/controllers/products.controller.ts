import { Controller, Get, Param, Post, Query } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get('')
  getProduct(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return `products ${limit} - ${offset} - ${brand}`;
  }

  @Get('filter')
  getProductsFilter() {
    return `product filter route`;
  }

  @Get(':id')
  getProducts(@Param('id') id: string) {
    return `product ${id}`;
  }

  @Post()
  create() {
    return {
      message: 'acción de crear',
    };
  }
}
