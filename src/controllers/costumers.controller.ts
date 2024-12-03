import { Controller, Get } from '@nestjs/common';

@Controller('costumers')
export class CostumersController {
  @Get('')
  getProduct() {
    return `costumers`;
  }
}
