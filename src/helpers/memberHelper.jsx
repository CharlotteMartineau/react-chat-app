export const getMembersExceptCurrentUser = (members, currentUser) => {
  return members?.filter((member) => member?.id !== currentUser?.id);
};

export const getMemberFullName = (member) =>
  `${member?.first_name} ${member?.last_name}`;

export const getMembersName = (chatroomMembers, currentUser) => {
  const membersExceptCurrentUser = getMembersExceptCurrentUser(
    chatroomMembers,
    currentUser
  );
  if (membersExceptCurrentUser.length > 1) {
    return membersExceptCurrentUser
      ?.map((member) => member?.first_name)
      ?.join(", ");
  } else {
    return membersExceptCurrentUser?.map((member) => getMemberFullName(member));
  }
};
