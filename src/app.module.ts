import { Module } from "@nestjs/common";
import { OrderService } from "./data/services/order.service";
import { PriceService } from "./data/services/price.service";
import { ProductService } from "./data/services/product.service";
import { PrismaService } from "./infra/prisma";
import { DbOrder } from "./infra/repository/db.order.table";
import { DbPrice } from "./infra/repository/db.price.table";
import { DbProduct } from "./infra/repository/db.product.table";
import { OrderController } from "./presentation/controllers/order.controller";
import { PriceController } from "./presentation/controllers/price.controller";
import { ProductController } from "./presentation/controllers/product.controller";

@Module({
  imports: [],
  controllers: [OrderController, ProductController, PriceController],
  providers: [OrderService, PrismaService, DbOrder, ProductService, DbProduct, PriceService, DbPrice],
})
export class AppModule {}
