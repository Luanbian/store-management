import { Injectable } from "@nestjs/common";
import { NewProductDto } from "src/main/core/dtos/product.dto";

@Injectable()
export class ProductService {
  async perform(productDto: NewProductDto): Promise<string> {
    console.log(productDto);
    return "teste";
  }
}
