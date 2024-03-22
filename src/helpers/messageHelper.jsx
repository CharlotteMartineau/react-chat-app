import { getCalendarDate, getFormatDate } from "../helpers/dateHelper";

export const getMessageMember = (members, message) => {
  return members?.find((member) => member?.id === message?.user_id);
};

export const getMessageMemberName = (members, message, lastMessage) => {
  const currentMessageMember = getMessageMember(members, message);
  const lastMessageMember =
    lastMessage && getMessageMember(members, lastMessage);

  if (currentMessageMember?.first_name !== lastMessageMember?.first_name) {
    return currentMessageMember?.first_name;
  }
};

export const getMessageDate = (message, lastMessage) => {
  const currentMessageDate = getFormatDate(message?.created_at);
  const lastMessageDate = lastMessage && getFormatDate(lastMessage?.created_at);

  if (currentMessageDate !== lastMessageDate) {
    return getCalendarDate(message?.created_at);
  }
};
