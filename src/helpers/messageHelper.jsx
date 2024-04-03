import { getCalendarDate, getFormatDate } from "../helpers/dateHelper";

export const getMessageMemberName = (message, lastMessage) => {
  if (message?.user_id !== lastMessage?.user_id) {
    return message?.user_first_name;
  }
};

export const getMessageDate = (message, lastMessage) => {
  const currentMessageDate = getFormatDate(message?.created_at);
  const lastMessageDate = lastMessage && getFormatDate(lastMessage?.created_at);

  if (currentMessageDate !== lastMessageDate) {
    return getCalendarDate(message?.created_at);
  }
};
