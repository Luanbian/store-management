import { Injectable } from "@nestjs/common";
import { randomUUID } from "crypto";
import { ProductEntity, ProductEntityProps } from "src/domain/entities/product.entity";
import { DbProduct } from "src/infra/repository/db.product.table";
import { NewProductDto } from "src/main/core/dtos/product.dto";

@Injectable()
export class ProductService {
  constructor(private readonly repository: DbProduct) {}

  async perform(productDto: NewProductDto): Promise<ProductEntity> {
    const product = await this.createProduct(productDto.name, productDto.type);
    return product;
  }

  private async createProduct(name: string, type: string) {
    const productEntityProps: ProductEntityProps = {
      id: randomUUID(),
      name,
      type,
    };
    return ProductEntity.create(productEntityProps);
  }
}
