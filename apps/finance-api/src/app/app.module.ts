import { Module } from '@nestjs/common';

import { AppController } from './profile/profile.controller';
import { AppService } from './profile/profile.service';
import {ConfigModule} from '@nestjs/config'

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true})],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
