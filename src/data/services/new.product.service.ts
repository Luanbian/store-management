import { Injectable } from "@nestjs/common";
import { DbProduct } from "src/infra/repository/db.product.table";
import { NewProductDto } from "src/main/core/dtos/product.dto";

@Injectable()
export class ProductService {
  constructor(private readonly repository: DbProduct) {}

  async perform(productDto: NewProductDto): Promise<string> {
    console.log(productDto);
    return "teste";
  }
}
