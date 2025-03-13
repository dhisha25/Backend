import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './users/users.module';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://dhishadhisha2006:V8WaOeeDneaWPy92@cluster0.7yjdt.mongodb.net/smsdatabase'),
   UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
