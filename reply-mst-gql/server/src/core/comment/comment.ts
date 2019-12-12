type TComment = {
  message: string;
};

const createMakeComment = () => (comment: TComment) => {
  const { message } = comment;
  if (!message) {
    throw new Error("Message cannot be blank.");
  }
  return comment;
};

export { createMakeComment };
