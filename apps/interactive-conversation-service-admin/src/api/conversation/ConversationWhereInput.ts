import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MessageListRelationFilter } from "../message/MessageListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ConversationWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  messages?: MessageListRelationFilter;
  title?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
