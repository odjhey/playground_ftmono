import { TComment, createMakeComment } from "../comment";

const createUCReplyComment = () => (commentId: string, reply: TComment) => {
  const makeComment = createMakeComment();
  const replyComment = makeComment({
    ...reply,
    replyTo: commentId
  });

  return replyComment;
};

export { createUCReplyComment };
