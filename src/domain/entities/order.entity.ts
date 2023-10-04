import { PaymentStatus } from "src/main/core/dtos/order.dto";
import { CustomerEntity } from "./customer.entity";
import { ItemEntity } from "./item.entity";

export class OrderEntity {
  readonly id: number;
  readonly paymentStatus: PaymentStatus;
  readonly paidAt: Date | null;
  readonly paymentVoucher: string | null;
  readonly paymentMethod: string | null;
  readonly dueAt: Date;
  readonly items: ItemEntity[];
  readonly createdAt: Date;
  readonly customer: CustomerEntity;
  readonly customerId: number;
}
