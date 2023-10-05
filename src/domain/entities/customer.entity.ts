import { OrderEntity } from "./order.entity";

export class CustomerEntity {
  readonly id: string;
  readonly name: string;
  readonly phone: string | null;
  readonly orders: OrderEntity[];
}
