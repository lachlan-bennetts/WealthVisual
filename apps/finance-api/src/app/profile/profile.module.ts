import { DatabaseToolsModule } from '@database-tools';
import { Module } from '@nestjs/common';
import {ConfigModule} from '@nestjs/config'

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true}), DatabaseToolsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
