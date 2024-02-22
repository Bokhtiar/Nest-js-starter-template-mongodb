import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { NotesModule } from './notes/notes.module';
import { CategoryModule } from './category/category.module';
import { ProductModule } from './product/product.module';
import { CartModule } from './cart/cart.module';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://bokhtiar:bokhtiar@cluster0.8z6ss.mongodb.net/nestjs?retryWrites=true&w=majority'),
    NotesModule,
    CategoryModule,
    ProductModule,
    CartModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
