import { Body, Controller, Post, ValidationPipe } from "@nestjs/common";
import { HttpResponse } from "src/@types/http";
import { ProductService } from "src/data/services/new.product.service";
import { NewProductDto } from "src/main/core/dtos/product.dto";
import { noContent, ok, serverError } from "../helper/http.helper";

@Controller()
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post("/product")
  async product(@Body(new ValidationPipe()) productDto: NewProductDto): Promise<HttpResponse> {
    try {
      const res = await this.productService.perform(productDto);
      if (!res) return noContent();
      return ok(res);
    } catch (error) {
      console.error(error);
      return serverError();
    }
  }
}
