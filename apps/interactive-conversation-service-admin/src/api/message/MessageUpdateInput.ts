import { ConversationWhereUniqueInput } from "../conversation/ConversationWhereUniqueInput";

export type MessageUpdateInput = {
  conversation?: ConversationWhereUniqueInput | null;
  text?: string | null;
};
