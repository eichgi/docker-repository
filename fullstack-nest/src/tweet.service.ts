import {Injectable} from "@nestjs/common";
import {PrismaService} from "./prisma.service";
import { Tweets } from "@prisma/client";

@Injectable()
export class TweetService {
  constructor(private prisma: PrismaService) {
  }

  async createTweet(data): Promise<Tweets> {
    return this.prisma.tweet.create(data);
  }
}