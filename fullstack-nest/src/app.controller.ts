import {Controller, Get} from '@nestjs/common';
import {AppService} from './app.service';
import {TweetService} from "./tweet.service";
import {PrismaService} from "./prisma.service";
import {PrismaClient} from "@prisma/client/extension";

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    // private readonly prismaService: PrismaService
    // private readonly tweetService: TweetService
  ) {
  }

  @Get()
  async getHello() {
    /*await this.tweetService.createTweet({
      content: "my first tweet grandma!"
    });*/
    return this.appService.getHello();
  }
}
