import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma";

@Injectable()
export class DbProduct {
  constructor(private readonly db: PrismaService) {}

  async get() {
    const result = await this.db.product.findMany();
    return result;
  }

  async create({ id, name, type }: { id: string; name: string; type: string }): Promise<void> {
    await this.db.product.create({ data: { id, name, type } });
  }
}
