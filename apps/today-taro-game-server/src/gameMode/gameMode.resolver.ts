import * as graphql from "@nestjs/graphql";
import { GameModeResolverBase } from "./base/gameMode.resolver.base";
import { GameMode } from "./base/GameMode";
import { GameModeService } from "./gameMode.service";

@graphql.Resolver(() => GameMode)
export class GameModeResolver extends GameModeResolverBase {
  constructor(protected readonly service: GameModeService) {
    super(service);
  }
}
