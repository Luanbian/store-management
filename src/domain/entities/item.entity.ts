import { PriceEntity } from "./price.entity";
import { ProductEntity } from "./product.entity";

export interface ItemEntityProps {
  id: string;
  quantity: number;
  price: PriceEntity;
  product: ProductEntity;
}

export class ItemEntity {
  readonly id: string;
  readonly quantity: number;
  readonly price: PriceEntity;
  readonly product: ProductEntity;

  private constructor(props: ItemEntityProps) {
    this.id = props.id;
    this.price = props.price;
    this.product = props.product;
    this.quantity = props.quantity;
  }

  public static create(input: ItemEntityProps) {
    return new ItemEntity(input);
  }
}
