import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm"
import {ConfigService} from "@nestjs/config"
import { Profile } from '../entities/profile.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        port: configService.getOrThrow('POSTGRESQL_PORT'),
        database: configService.getOrThrow('POSTGRESQL_DATABASE'),
        username: configService.getOrThrow('POSTGRESQL_USER'),
        password: configService.getOrThrow('POSTGRESQL_PASSWORD'),
        host: configService.getOrThrow('POSTGRESQL_HOST'),
        autoLoadEntities: true,
        synchronize: configService.getOrThrow("POSTGRESQL_SYNC"),
        logging: configService.getOrThrow("TYPEORM_LOG")
      }),
      inject: [ConfigService],
    }),
    TypeOrmModule.forFeature([Profile])
  ],
  providers: [],
  exports: [],
})
export class DatabaseToolsModule {}
