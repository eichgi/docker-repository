import type { RedisClientOptions } from "redis";
import * as redisStore from 'cache-manager-redis-store';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from "@nestjs/config";
import { CacheModule } from "@nestjs/cache-manager";
import {TweetService} from "./tweet.service";
import {PrismaService} from "./prisma.service";

@Module({
  imports: [
    ConfigModule.forRoot(),
    CacheModule.register<RedisClientOptions>({
      isGlobal: true,
      // @ts-ignore
      store: redisStore,
      host: process.env.REDIS_HOST,
      port: process.env.REDIS_PORT
    })
  ],
  controllers: [AppController],
  providers: [AppService, /* PrismaService TweetService */],
})
export class AppModule {}
