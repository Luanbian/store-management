import { Injectable } from "@nestjs/common";
import { Price } from "@prisma/client";
import { PrismaService } from "../prisma";

@Injectable()
export class DbPrice {
  constructor(private readonly db: PrismaService) {}

  async create({ id, value }: { id: string; value: number }): Promise<void> {
    await this.db.price.create({ data: { id, value } });
  }

  async get(): Promise<Price[]> {
    return await this.db.price.findMany();
  }
}
