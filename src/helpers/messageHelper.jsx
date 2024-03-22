export const getMessageMember = (members, message) => {
  return members.find((member) => member.id === message.user_id);
};
