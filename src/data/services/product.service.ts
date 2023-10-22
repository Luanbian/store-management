import { Injectable } from "@nestjs/common";
import { randomUUID } from "crypto";
import { ProductEntity, ProductEntityProps } from "src/domain/entities/product.entity";
import { DbProduct } from "src/infra/repository/db.product.table";
import { NewProductDto } from "src/main/core/dtos/product.dto";

@Injectable()
export class ProductService {
  constructor(private readonly repository: DbProduct) {}

  async post(productDto: NewProductDto): Promise<ProductEntity> {
    const product = await this.createProduct(productDto.name, productDto.type);
    await this.repository.create(product);
    return product;
  }

  async get(): Promise<{ id: string; name: string; type: string }[]> {
    return await this.repository.get();
  }

  private async createProduct(name: string, type: string): Promise<ProductEntity> {
    const productEntityProps: ProductEntityProps = {
      id: randomUUID(),
      name,
      type,
    };
    return ProductEntity.create(productEntityProps);
  }
}
