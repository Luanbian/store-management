import { Injectable } from "@nestjs/common";
import { type Order } from "@prisma/client";
import { DbOrder } from "src/infra/repository/db.order.table";

@Injectable()
export class AppService {
  constructor(private readonly repository: DbOrder) {}

  async getOder(): Promise<Order[]> {
    const order = await this.repository.get();
    return order;
  }
}
