import { Injectable } from "@nestjs/common";
import { Order } from "src/domain/entities/order.entity";
import { DbOrder } from "src/infra/repository/db.order.table";
import { type NewOrderDto } from "src/main/core/dtos/order.dto";

@Injectable()
export class OrderService {
  constructor(private readonly repository: DbOrder) {}

  async createOrder(orderDto: NewOrderDto): Promise<Order> {
    const order = Order.create(orderDto);
    return order;
  }
}
