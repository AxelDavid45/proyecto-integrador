import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/integrador3')],
  controllers: [],
  providers: [],
})
export class DatabaseModule {}
