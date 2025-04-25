import { Module } from '@nestjs/common';
import { DataController } from './data/data.controller';

@Module({
  imports: [],
  controllers: [DataController],
  providers: [],
})
export class AppModule {}
