import { Injectable } from "@nestjs/common";
import { randomUUID } from "crypto";
import { PriceEntity, PriceEntityProps } from "src/domain/entities/price.entity";
import { DbPrice } from "src/infra/repository/db.price.table";
import { NewPriceDto } from "src/main/core/dtos/price.dto";

@Injectable()
export class PriceService {
  constructor(private readonly repository: DbPrice) {}

  async post(newPrice: NewPriceDto): Promise<PriceEntity> {
    const price = await this.createPrice(newPrice.value);
    await this.repository.create(price);
    return price;
  }

  async get(): Promise<PriceEntity[]> {
    return await this.repository.get();
  }

  private async createPrice(value: number): Promise<PriceEntity> {
    const priceEntityProps: PriceEntityProps = {
      id: randomUUID(),
      value,
    };
    return PriceEntity.create(priceEntityProps);
  }
}
