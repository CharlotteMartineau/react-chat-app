export const getMembersExceptCurrentUser = (memberships, currentUser) => {
  return memberships
    ?.filter((membership) => membership?.user_id !== currentUser?.id)
    ?.map((membership) => membership?.member);
};

export const getMemberFullName = (member) =>
  `${member?.first_name} ${member?.last_name}`;

export const getMembersName = (memberships, currentUser) => {
  const membersExceptCurrentUser = getMembersExceptCurrentUser(
    memberships,
    currentUser
  );
  if (membersExceptCurrentUser?.length > 1) {
    return membersExceptCurrentUser
      ?.map((member) => member?.first_name)
      ?.join(", ");
  } else {
    return membersExceptCurrentUser?.map((member) => getMemberFullName(member));
  }
};
