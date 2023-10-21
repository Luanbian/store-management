import { Body, Controller, Get, Post, ValidationPipe } from "@nestjs/common";
import { HttpResponse } from "src/@types/http";
import { ProductService } from "src/data/services/new.product.service";
import { NewProductDto } from "src/main/core/dtos/product.dto";
import { noContent, ok, serverError } from "../helper/http.helper";

@Controller()
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post("/product")
  async create(@Body(new ValidationPipe()) productDto: NewProductDto): Promise<HttpResponse> {
    try {
      const res = await this.productService.post(productDto);
      if (!res) return noContent();
      return ok(res);
    } catch (error) {
      console.error(error);
      return serverError();
    }
  }

  @Get("/product")
  async get(): Promise<HttpResponse> {
    try {
      const res = await this.productService.get();
      if (!res) return noContent();
      return ok(res);
    } catch (error) {
      console.error(error);
      return serverError();
    }
  }
}
