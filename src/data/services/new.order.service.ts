import { Injectable } from "@nestjs/common";
import { type Order } from "@prisma/client";
import { NewOrder } from "src/domain/entities/newOrder.entity";
import { DbOrder } from "src/infra/repository/db.order.table";
import { type NewOrderDto } from "src/main/core/dtos/order.dto";

@Injectable()
export class OrderService {
  constructor(private readonly repository: DbOrder) {}

  async getOder(): Promise<Order[]> {
    const order = await this.repository.get();
    return order;
  }

  async createOrder(orderDto: NewOrderDto): Promise<NewOrder> {
    const order = NewOrder.create(orderDto);
    return order;
  }
}
