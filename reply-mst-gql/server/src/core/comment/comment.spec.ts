type TComment = {
  message: string;
};

const makeComment = (comment: TComment) => {
  const { message } = comment;
  if (!message) {
    throw new Error("Message cannot be blank.");
  }
  return comment;
};

describe("core/lcomments", () => {
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
});
