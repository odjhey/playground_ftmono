import { createCreateCommentDB } from "./create-comment-db";

describe("create comment", () => {
  const commentMock = {
    insert: jest.fn(async input => {
      return { _id: "1", ...input };
    })
  };
  const createComment = createCreateCommentDB(commentMock);

  it("should be able to save a comment in the DB", async () => {
    const given = { message: "yo" };
    const newComment = await createComment(given);

    //Please hard-code your expects: ie { message: "yo" }
    expect(commentMock.insert.mock.calls.length).toBe(1);
    expect(newComment).toMatchObject({ _id: "1", message: "yo" });
  });
});
