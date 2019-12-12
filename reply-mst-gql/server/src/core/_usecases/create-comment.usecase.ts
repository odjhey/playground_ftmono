import { createMakeComment } from "../comment/comment";

const createUCCreateComment = () => comment => {
  const makeComment = createMakeComment();
  return makeComment(comment);
};

export { createUCCreateComment };
