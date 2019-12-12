import { createCreateCommentDB } from "./create-comment-db";

import { commentModel } from "../models";

const createComment = createCreateCommentDB(commentModel);

export { createComment };
