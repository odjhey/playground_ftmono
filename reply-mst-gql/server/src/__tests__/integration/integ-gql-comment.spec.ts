import { gql } from "apollo-server";
import { createTestClient } from "apollo-server-testing";

import { contructTestServer } from "../__utils";

import { createCreateCommentDB } from "../../controllers/mock-index";
import { IDBModel } from "../../commons/types";

describe("mutations", () => {
  it("creates a comment", async () => {
    const CREATE_COMMENT = gql`
      mutation CreateComment($comment: createCommentInput!) {
        createComment(comment: $comment) {
          id
          message
        }
      }
    `;

    // mock the methods
    const commentMock = {
      insert: jest.fn(async input => {
        return { id: "1", message: "lol" };
      })
    };

    const { server } = contructTestServer({
      context: {
        createComment: createCreateCommentDB(commentMock)
      }
    });

    // use our server as input to the test client
    const { mutate } = createTestClient(server);
    const res = await mutate({
      mutation: CREATE_COMMENT,
      variables: {
        comment: {
          message: "Hello integ test mutate chu chu"
        }
      }
    });
    expect(res.errors).toBeUndefined();
    expect(commentMock.insert.mock.calls.length).toBe(1);
    expect(res.data).toMatchObject({
      createComment: { id: "1", message: "lol" }
    });
  });
});
