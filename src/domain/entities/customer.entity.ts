import { OrderEntity } from "./order.entity";

export class CustomerEntity {
  readonly id: number;
  readonly name: string;
  readonly phone: string | null;
  readonly orders: OrderEntity[];
}
