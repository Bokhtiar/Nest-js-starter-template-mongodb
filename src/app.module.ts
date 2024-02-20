import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { NotesModule } from './notes/notes.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://bokhtiar:bokhtiar@cluster0.8z6ss.mongodb.net/nestjs?retryWrites=true&w=majority'),
    NotesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
