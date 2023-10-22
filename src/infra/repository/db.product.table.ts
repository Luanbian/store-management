import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma";

@Injectable()
export class DbProduct {
  constructor(private readonly db: PrismaService) {}

  async get() {
    const result = await this.db.product.findMany();
    return result;
  }
}
