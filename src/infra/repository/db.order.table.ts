import { Injectable } from "@nestjs/common";
import { type Order } from "@prisma/client";
import { PrismaService } from "../prisma";

@Injectable()
export class DbOrder {
  constructor(private readonly db: PrismaService) {}

  async get(): Promise<Order[]> {
    const result = await this.db.order.findMany();
    return result;
  }
}
