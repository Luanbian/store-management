import { PaymentStatus } from "src/main/core/dtos/order.dto";
import { ItemEntity } from "./item.entity";

export interface OrderEntityProps {
  id: string;
  paymentStatus: PaymentStatus;
  paidAt: Date | null;
  paymentVoucher: string | null;
  paymentMethod: string | null;
  items: ItemEntity[];
}
export class OrderEntity {
  readonly id: string;
  readonly paymentStatus: PaymentStatus;
  readonly paidAt: Date | null;
  readonly paymentVoucher: string | null;
  readonly paymentMethod: string | null;
  public dueAt: Date;
  readonly items: ItemEntity[];
  readonly createdAt: Date;

  private constructor(props: OrderEntityProps) {
    this.id = props.id;
    this.paymentStatus = props.paymentStatus;
    this.paidAt = props.paidAt;
    this.paymentVoucher = props.paymentVoucher;
    this.paymentMethod = props.paymentMethod;
    this.items = props.items;
    this.createdAt = new Date();
  }

  public static create(input: OrderEntityProps): OrderEntity {
    const order = new OrderEntity(input);
    order.dueAt = this.setDueAt();
    return order;
  }

  private static setDueAt(): Date {
    const currentDate = new Date();
    const dueDate = new Date(currentDate);
    dueDate.setDate(currentDate.getDate() + 3);
    return dueDate;
  }
}
