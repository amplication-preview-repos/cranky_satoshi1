import { ConversationWhereUniqueInput } from "../conversation/ConversationWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type MessageWhereInput = {
  conversation?: ConversationWhereUniqueInput;
  id?: StringFilter;
  text?: StringNullableFilter;
};
