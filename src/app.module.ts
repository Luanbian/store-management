import { Module } from "@nestjs/common";
import { AppService } from "./data/services/app.service";
import { AppController } from "./presentation/controllers/app.controller";

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
