import { Comment } from "../mongo-models";

const commentModel: IDBModel<any> = {
  insert: async comment => {
    const { message } = comment;
    const newComment = new Comment({ message });
    return newComment;
  }
};

export { commentModel };
