import { Controller, Get, Param } from '@nestjs/common';
import logger from 'src/logger';
import * as staticData from './static-data.json';

@Controller('data')
export class DataController {
  @Get(':name')
  getData(@Param('name') name: string) {
    const character = staticData.find((item: any) => item.name === name);
    logger.log(`Fetching data for character: ${name}`);
    if (character) {
      return character;
    } else {
      return { message: 'Character not found' };
    }
  }
}
