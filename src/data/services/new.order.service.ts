import { Injectable } from "@nestjs/common";
import { randomUUID } from "crypto";
import { OrderEntity, OrderEntityProps } from "src/domain/entities/order.entity";
import { DbOrder } from "src/infra/repository/db.order.table";
import { type NewOrderDto } from "src/main/core/dtos/order.dto";

@Injectable()
export class OrderService {
  constructor(private readonly repository: DbOrder) {}

  async createOrder(orderDto: NewOrderDto): Promise<OrderEntity> {
    const orderProps: OrderEntityProps = {
      ...orderDto,
      id: randomUUID(),
      itemId: randomUUID(),
      priceId: randomUUID(),
      productId: randomUUID(),
    };
    const order = OrderEntity.create(orderProps);
    return order;
  }
}
