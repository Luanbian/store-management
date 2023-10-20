import { Injectable } from "@nestjs/common";
import { randomUUID } from "crypto";
import { CustomerEntity, CustomerEntityProps } from "src/domain/entities/customer.entity";
import { ItemEntity, ItemEntityProps } from "src/domain/entities/item.entity";
import { OrderEntity, OrderEntityProps } from "src/domain/entities/order.entity";
import { DbOrder } from "src/infra/repository/db.order.table";
import { PaymentStatus, type NewOrderDto } from "src/main/core/dtos/order.dto";

@Injectable()
export class OrderService {
  constructor(private readonly repository: DbOrder) {}

  async perform(orderDto: NewOrderDto): Promise<CustomerEntity> {
    const item = await this.createItem(orderDto.value, orderDto.product, orderDto.quantity);
    const order = await this.createOrder(
      [item],
      orderDto.paidAt,
      orderDto.paymentMethod,
      orderDto.paymentStatus,
      orderDto.paymentVoucher,
    );
    const customer = await this.createCustomer(orderDto.clientName, [order], orderDto.clientPhone);
    return customer;
  }

  private async createOrder(
    items: ItemEntity[],
    paidAt?: Date,
    paymentMethod?: string,
    paymentStatus?: PaymentStatus,
    paymentVoucher?: string,
  ): Promise<OrderEntity> {
    const orderEntityProps: OrderEntityProps = {
      id: randomUUID(),
      paidAt,
      paymentMethod,
      paymentStatus,
      paymentVoucher,
      items,
    };
    return OrderEntity.create(orderEntityProps);
  }

  private async createItem(priceId: string, productId: string, quantity: number): Promise<ItemEntity> {
    const itemEntityProps: ItemEntityProps = {
      id: randomUUID(),
      priceId,
      productId,
      quantity,
    };
    return ItemEntity.create(itemEntityProps);
  }

  private async createCustomer(name: string, orders: OrderEntity[], phone?: string) {
    const customerEntityProps: CustomerEntityProps = {
      id: randomUUID(),
      name,
      phone,
      orders,
    };
    return CustomerEntity.create(customerEntityProps);
  }
}
