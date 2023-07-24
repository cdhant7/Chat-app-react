import Message from "./Message";

const ChatBox = () => {
  const messages = [
    {
      id: 1,
      text: "hello there",
      name: "sid bro",
    },
    {
      id: 2,
      text: "hiii!",
      name: "john bro",
    },
  ];

  return (
    <div className="pb-44 pt-20 containerWrap">
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
    </div>
  );
};

export default ChatBox;
