import { InputJsonValue } from "../../types";

export type CardCreateInput = {
  description?: string | null;
  image?: InputJsonValue;
  name?: string | null;
};
