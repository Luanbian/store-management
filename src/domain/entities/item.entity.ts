export interface ItemEntityProps {
  id: string;
  quantity: number;
  priceId: string;
  productId: string;
}

export class ItemEntity {
  readonly id: string;
  readonly quantity: number;
  readonly priceId: string;
  readonly productId: string;

  private constructor(props: ItemEntityProps) {
    this.id = props.id;
    this.priceId = props.priceId;
    this.productId = props.productId;
    this.quantity = props.quantity;
  }

  public static create(input: ItemEntityProps) {
    return new ItemEntity(input);
  }
}
