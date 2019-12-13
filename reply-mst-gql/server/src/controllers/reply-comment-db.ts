import { createUCReplyComment } from "../core";

const createReplyToAComment = db => async (commentId, reply) => {
  const uCReplyComment = createUCReplyComment();
  const replyResult = uCReplyComment(commentId, reply);
  const dbResult = await db.insert(replyResult);
  return dbResult;
};

export { createReplyToAComment };
