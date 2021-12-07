import { Controller, Get } from '@nestjs/common';

@Controller('brands')
export class BrandsController {
  @Get('')
  getProduct() {
    return `brands`;
  }
}
