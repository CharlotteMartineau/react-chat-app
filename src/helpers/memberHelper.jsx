export const getMembersExceptCurrentUser = (members, currentUser) => {
  return members?.filter((member) => member?.id !== currentUser?.id);
};

export const getMembersName = (chatroomMembers, currentUser) => {
  const membersExceptCurrentUser = getMembersExceptCurrentUser(
    chatroomMembers,
    currentUser
  );
  const membersName = membersExceptCurrentUser
    ?.map((member) => member?.first_name)
    ?.reduce((accumulator, currentValue) => accumulator + ", " + currentValue);

  return `${membersName} et vous`;
};
