import { type NewOrderDto } from "src/main/core/dtos/order.dto";

export enum PaymentStatus {
  PENDING = "PENDING",
  PAID = "PAID",
  OVERDUE = "OVERDUE",
}

interface newOrderProps extends NewOrderDto {
  dueAt: Date;
  paymentStatus: PaymentStatus;
}

export class NewOrder {
  readonly clientName: string;
  readonly clientPhone: string | null;
  readonly quantity: number;
  readonly productName: string;
  readonly productType: string;
  readonly value: number;
  readonly paymentStatus: PaymentStatus;
  public dueAt: Date;

  private constructor(props: newOrderProps) {
    this.clientName = props.clientName;
    this.clientPhone = props.clientPhone;
    this.quantity = props.quantity;
    this.productName = props.productName;
    this.productType = props.productType;
    this.value = props.value;
    this.paymentStatus = props.paymentStatus;
    this.dueAt = props.dueAt;
  }

  static create(input: NewOrderDto) {
    const newOrder = new NewOrder({ ...input, dueAt: null });
    newOrder.dueAt = this.setDueDate();
    return newOrder;
  }

  private static setDueDate(): Date {
    const currentDate = new Date();
    const dueDate = new Date(currentDate);
    dueDate.setDate(currentDate.getDate() + 3);
    return dueDate;
  }
}
