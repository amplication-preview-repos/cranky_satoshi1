import { ConversationWhereUniqueInput } from "../conversation/ConversationWhereUniqueInput";

export type MessageCreateInput = {
  conversation?: ConversationWhereUniqueInput | null;
  text?: string | null;
};
