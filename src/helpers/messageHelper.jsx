import { getCalendarDate, getFormatDate } from "../helpers/dateHelper";

export const getMessageMember = (members, message) => {
  return members.find((member) => member.id === message.user_id);
};

export const getMessageDate = (message, lastMessage) => {
  const currentMessageDate = getFormatDate(message?.created_at);
  const lastMessageDate = lastMessage && getFormatDate(lastMessage?.created_at);

  if (currentMessageDate !== lastMessageDate) {
    return getCalendarDate(message?.created_at);
  }
};
