import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type CardWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  image?: JsonFilter;
  name?: StringNullableFilter;
};
