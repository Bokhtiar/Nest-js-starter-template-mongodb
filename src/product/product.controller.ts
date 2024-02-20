import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
   
    constructor(private readonly productService: ProductService) { }

    @Get()
    async index(){
        return this.productService.index()
    }

    @Post()
    async store(@Body() payload:any){
        return this.productService.store(payload)
    }

    @Get(':id')
    async show(@Param('id') id: string) {
        return this.productService.show(id)
    }

    @Patch(':id')
    async update(@Param('id') id:string, @Body() payload: any) {
        return this.productService.update(id, payload)
    }

    @Delete(':id')
    async destroy(@Param('id') id: string) {
        return this.productService.destory(id)
    }
}
