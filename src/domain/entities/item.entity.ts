import { PriceEntity } from "./price.entity";
import { ProductEntity } from "./product.entity";

export class ItemEntity {
  readonly id: string;
  readonly quantity: number;
  readonly product: ProductEntity;
  readonly price: PriceEntity;
}
