import { OrderEntity } from "./order.entity";
import { PriceEntity } from "./price.entity";
import { ProductEntity } from "./product.entity";

export class ItemEntity {
  readonly id: number;
  readonly quantity: number;
  readonly product: ProductEntity;
  readonly price: PriceEntity;
  readonly productId: number;
  readonly priceId: number;
  readonly order: OrderEntity | null;
  readonly orderId: number;
}
