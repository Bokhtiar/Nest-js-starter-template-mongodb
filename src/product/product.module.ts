import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductSchema } from './product.model';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: 'Product',
      schema: ProductSchema
    }]),
  ],
  providers: [ProductService],
  controllers: [ProductController]
})
export class ProductModule {}
