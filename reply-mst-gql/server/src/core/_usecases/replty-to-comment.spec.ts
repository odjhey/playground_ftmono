import { createUCReplyComment } from "./reply-to-comment.usecase";
import { createUCCreateComment } from "./create-comment.usecase";

describe("UseCase: Reply to a comment", () => {
  it("should be able to reply to a comment", () => {
    const replyToAComment = createUCReplyComment();
    const uCCreateComment = createUCCreateComment();

    const given_comment_id = "1";
    const given_reply = {
      message: "Replying..."
    };

    const commentId = given_comment_id;
    const reply = uCCreateComment(given_reply);

    const reply_result = replyToAComment(commentId, reply);

    expect(reply_result).toMatchObject({
      message: "Replying...",
      replyTo: "1"
    });
  });
});
