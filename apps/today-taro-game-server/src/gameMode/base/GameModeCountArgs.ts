/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { GameModeWhereInput } from "./GameModeWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class GameModeCountArgs {
  @ApiProperty({
    required: false,
    type: () => GameModeWhereInput,
  })
  @Field(() => GameModeWhereInput, { nullable: true })
  @Type(() => GameModeWhereInput)
  where?: GameModeWhereInput;
}

export { GameModeCountArgs as GameModeCountArgs };
