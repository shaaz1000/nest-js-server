import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductsService } from './products.service';

// filter for route that starts with products
@Controller('/product')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}
  @Post()
  addProduct(
    @Body('title') prodTitle: string,
    @Body('description') prodDesc: string,
    @Body('price') prodPrice: number,
  ){
    return this.productsService.insertProduct(prodTitle, prodDesc, prodPrice);
  }
    
    @Get()
    getAllProducts() {
        return this.productsService.getAllProducts();
    }
}
