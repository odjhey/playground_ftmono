import { createUCCreateComment } from "./create-comment.usecase";

const createComment = createUCCreateComment();

describe("UseCase: Create a comment", () => {
  it("should be able to create a comment", () => {
    const given = {
      message: "hello world"
    };

    const newComment = createComment(given);
    expect(newComment).toMatchObject({ message: "hello world" });
  });
});
