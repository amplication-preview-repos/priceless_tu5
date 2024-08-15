import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { GameModeService } from "./gameMode.service";
import { GameModeControllerBase } from "./base/gameMode.controller.base";

@swagger.ApiTags("gameModes")
@common.Controller("gameModes")
export class GameModeController extends GameModeControllerBase {
  constructor(protected readonly service: GameModeService) {
    super(service);
  }
}
