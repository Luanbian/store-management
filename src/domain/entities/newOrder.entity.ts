import { type NewOrderDto } from "src/main/core/dtos/order.dto";

interface newOrderProps extends NewOrderDto {
  dueAt: Date;
}

export class NewOrder {
  readonly clientName: string;
  readonly quantity: number;
  readonly productName: string;
  readonly productType: string;
  readonly value: number;
  readonly paymentStatus: string;
  private _dueAt: Date;

  private constructor(props: newOrderProps) {
    this.clientName = props.clientName;
    this.quantity = props.quantity;
    this.productName = props.productName;
    this.productType = props.productType;
    this.value = props.value;
    this.paymentStatus = props.paymentStatus;
    this._dueAt = props.dueAt;
  }

  get dueAt() {
    return this._dueAt;
  }

  static create(input: NewOrderDto) {
    const newOrder = new NewOrder({ ...input, dueAt: null });
    newOrder._dueAt = this.setDueDate();
    return newOrder;
  }

  private static setDueDate(): Date {
    const currentDate = new Date();
    const dueDate = new Date(currentDate);
    dueDate.setDate(currentDate.getDate() + 3);
    return dueDate;
  }
}
