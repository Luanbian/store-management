import { OrderEntity } from "./order.entity";

interface CustomerEntityProps {
  id: string;
  name: string;
  phone: string | null;
  orders: OrderEntity[];
}
export class CustomerEntity {
  readonly id: string;
  readonly name: string;
  readonly phone: string | null;
  readonly orders: OrderEntity[];

  constructor(props: CustomerEntityProps) {
    this.id = props.id;
    this.name = props.name;
    this.phone = props.phone;
    this.orders = props.orders;
  }

  public static create(input: CustomerEntityProps) {
    return new CustomerEntity(input);
  }
}
