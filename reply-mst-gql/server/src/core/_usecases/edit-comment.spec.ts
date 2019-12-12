import { createUCEditComment } from "./edit-comment.usecase";

describe("UseCase: Edit a comment", () => {
  it("should be able to edit a comment", () => {
    //temp
    const isEditable = jest.fn(() => {
      return true;
    });

    const createComment = createUCEditComment(isEditable);
    const given = {
      message: "hello world"
    };

    const newComment = createComment(given);
    expect(isEditable.mock.calls.length).toBe(1);
    expect(newComment).toMatchObject({ message: "hello world" });
  });
  it("should not be able to edit a comment", () => {
    //temp
    const isEditable = jest.fn(() => {
      return false;
    });

    const createComment = createUCEditComment(isEditable);
    const given = {
      message: "hello world"
    };

    expect(() => {
      createComment(given);
    }).toThrow();
    expect(isEditable.mock.calls.length).toBe(1);
  });
});
