import { createMakeComment } from "./comment";

const makeComment = createMakeComment();

describe("core/comments", () => {
  it("should be able to make a comment", () => {
    const given = { message: "hello" };
    const comment = makeComment(given);
    expect(comment).toMatchObject({ message: "hello" });
  });
  it("should NOT be able to make an EMPTY comment", () => {
    const given = { message: "" };
    expect(() => {
      makeComment(given);
    }).toThrow();
  });

  //Reply
  it("should be able to capture a reply", () => {
    const given = { message: "this is a reply", replyTo: "1" };
    const reply = makeComment(given);
    expect(reply).toMatchObject({ message: "this is a reply", replyTo: "1" });
  });
});
