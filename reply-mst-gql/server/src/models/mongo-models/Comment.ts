import mongoose from "mongoose";
import { ObjectID } from "mongodb";

const Schema = mongoose.Schema;
ObjectID.prototype.valueOf = function() {
  return this.toString();
};

const CommentSchema = new Schema(
  {
    message: {
      type: String
    },
    replyToID: {
      type: String
    }
  },
  { timestamps: true }
);

export default mongoose.model("Comment", CommentSchema);
