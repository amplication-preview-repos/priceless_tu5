import { InputJsonValue } from "../../types";

export type CardUpdateInput = {
  description?: string | null;
  image?: InputJsonValue;
  name?: string | null;
};
