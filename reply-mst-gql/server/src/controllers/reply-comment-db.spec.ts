import { createReplyToAComment } from "./reply-comment-db";

describe("reply to a comment", () => {
  const mockDbModel = {
    insert: jest.fn(input => {
      return { _id: "2", ...input };
    })
  };

  const replyToAComment = createReplyToAComment(mockDbModel);

  it("should be able to reply to an existing comment", async () => {
    const commentId = "1";
    const given_reply = { message: "yo", replyTo: "1" };

    const reply = await replyToAComment(commentId, given_reply);

    //Please hard-code your expects: ie { message: "yo" }
    expect(mockDbModel.insert.mock.calls.length).toBe(1);
    expect(reply).toMatchObject({ _id: "2", message: "yo", replyTo: "1" });
  });
});
