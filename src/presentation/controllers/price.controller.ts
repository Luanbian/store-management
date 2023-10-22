import { Body, Controller, Get, Post, ValidationPipe } from "@nestjs/common";
import { HttpResponse } from "src/@types/http";
import { PriceService } from "src/data/services/price.service";
import { NewPriceDto } from "src/main/core/dtos/price.dto";
import { noContent, ok, serverError } from "../helper/http.helper";

@Controller()
export class PriceController {
  constructor(private readonly priceService: PriceService) {}

  @Post("/price")
  async create(@Body(new ValidationPipe()) PriceDto: NewPriceDto): Promise<HttpResponse> {
    try {
      const res = await this.priceService.post(PriceDto);
      if (!res) return noContent();
      return ok(res);
    } catch (error) {
      console.error(error);
      return serverError();
    }
  }

  @Get("/price")
  async get(): Promise<HttpResponse> {
    try {
      const res = await this.priceService.get();
      if (!res) return noContent();
      return ok(res);
    } catch (error) {
      console.error(error);
      return serverError();
    }
  }
}
