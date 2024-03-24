import ActionCable from "action-cable-react-jwt";

const actionCableProvider = {};
export const subscribeChannel = (token, chatroomId, received) => {
  actionCableProvider.token = token;
  actionCableProvider.consumer = ActionCable.createConsumer(
    `ws://localhost:8000/cable`,
    token
  );

  document.cookie = `X-Authorization=${token}; path=/`;

  const subscription = actionCableProvider.consumer.subscriptions.create(
    {
      channel: "ChatChannel",
      room: chatroomId,
    },
    received
  );
  return subscription;
};

export const unsubscribeChannel = (subscription) => {
  return actionCableProvider.consumer.subscriptions.remove(subscription);
};
