import { createUCCreateComment } from "../core";

const createCreateCommentDB = (db: IDBModel<any>) => async comment => {
  const createComment = createUCCreateComment();
  const newComment = createComment(comment);
  return db.insert(newComment);
};

export { createCreateCommentDB };
