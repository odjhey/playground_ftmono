export type TComment = {
  message: string;
  replyTo?: string;
};

const createMakeComment = () => (comment: TComment): TComment => {
  const { message, replyTo } = comment;
  if (!message) {
    throw new Error("Message cannot be blank.");
  }
  return { message, replyTo };
};

export { createMakeComment };
