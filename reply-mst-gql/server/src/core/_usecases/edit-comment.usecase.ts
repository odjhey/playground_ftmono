import { createMakeComment } from "../comment/comment";

const createUCEditComment = isEditable => comment => {
  if (!isEditable()) {
    throw new Error("Unable to edit.");
  }
  const makeComment = createMakeComment();
  return makeComment(comment);
};

export { createUCEditComment };
