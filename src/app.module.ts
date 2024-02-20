import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { NotesModule } from './notes/notes.module';
import { CategoryModule } from './category/category.module';
import { ProductModule } from './product/product.module';
import { ProducService } from './produc/produc.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://bokhtiar:bokhtiar@cluster0.8z6ss.mongodb.net/nestjs?retryWrites=true&w=majority'),
    NotesModule,
    CategoryModule,
    ProductModule
  ],
  controllers: [AppController],
  providers: [AppService, ProducService],
})
export class AppModule {}
