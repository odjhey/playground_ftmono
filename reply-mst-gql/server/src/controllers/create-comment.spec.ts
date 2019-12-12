import { createUCCreateComment } from "../core";

interface IDBModel<T> {
  insert: (input: any) => PromiseLike<T>;
}

describe("create comment", () => {
  const createCreateComment = (db: IDBModel<any>) => async comment => {
    const createComment = createUCCreateComment();
    const newComment = createComment(comment);
    return db.insert(newComment);
  };
  const commentMock = {
    insert: jest.fn(async input => {
      return { _id: "1", ...input };
    })
  };

  it("should be able to save a comment in the DB", async () => {
    const given = { message: "yo" };
    const createComment = createCreateComment(commentMock);
    const newComment = await createComment(given);

    //Please hard-code your expects: ie { message: "yo" }
    expect(commentMock.insert.mock.calls.length).toBe(1);
    expect(newComment).toMatchObject({ _id: "1", message: "yo" });
  });
});
