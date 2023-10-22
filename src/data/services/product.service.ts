import { Injectable } from "@nestjs/common";
import { randomUUID } from "crypto";
import { PriceEntity, PriceEntityProps } from "src/domain/entities/price.entity";
import { ProductEntity, ProductEntityProps } from "src/domain/entities/product.entity";
import { DbProduct } from "src/infra/repository/db.product.table";
import { NewProductDto } from "src/main/core/dtos/product.dto";

@Injectable()
export class ProductService {
  constructor(private readonly repository: DbProduct) {}

  async post(productDto: NewProductDto): Promise<{ product: ProductEntity; price: PriceEntity }> {
    const product = await this.createProduct(productDto.name, productDto.type);
    const price = await this.createPrice(productDto.value);
    return { product, price };
  }

  async get(): Promise<
    {
      id: number;
      name: string;
      type: string;
    }[]
  > {
    const list = await this.repository.get();
    return list;
  }

  private async createProduct(name: string, type: string) {
    const productEntityProps: ProductEntityProps = {
      id: randomUUID(),
      name,
      type,
    };
    return ProductEntity.create(productEntityProps);
  }

  private async createPrice(value: number) {
    const priceEntityProps: PriceEntityProps = {
      id: randomUUID(),
      value,
    };
    return PriceEntity.create(priceEntityProps);
  }
}
