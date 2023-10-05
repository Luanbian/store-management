import { NewOrderDto, PaymentStatus } from "src/main/core/dtos/order.dto";
import { ItemEntity } from "./item.entity";

export interface OrderEntityProps extends NewOrderDto {
  id: string;
  productId: string;
  priceId: string;
  itemId: string;
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
    this.paidAt = null;
    this.paymentVoucher = null;
    this.paymentMethod = null;
    this.items = [
      {
        id: props.itemId,
        product: {
          id: props.productId,
          name: props.productName,
          type: props.productType,
        },
        price: {
          id: props.priceId,
          value: props.value,
        },
        quantity: props.quantity,
      },
    ];
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
