import { Module } from "@nestjs/common";
import { GameModeModuleBase } from "./base/gameMode.module.base";
import { GameModeService } from "./gameMode.service";
import { GameModeController } from "./gameMode.controller";
import { GameModeResolver } from "./gameMode.resolver";

@Module({
  imports: [GameModeModuleBase],
  controllers: [GameModeController],
  providers: [GameModeService, GameModeResolver],
  exports: [GameModeService],
})
export class GameModeModule {}
