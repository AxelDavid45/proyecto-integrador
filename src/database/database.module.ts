import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot(process.env.MONGO_URI as string)],
  controllers: [],
  providers: [],
  exports: [MongooseModule],
})
export class DatabaseModule {}
