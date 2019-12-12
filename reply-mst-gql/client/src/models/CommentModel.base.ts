/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { CommentModel, CommentModelType } from "./CommentModel"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  replyTo: CommentModelType;
}

/**
 * CommentBase
 * auto generated base class for the model CommentModel.
 */
export const CommentModelBase = withTypedRefs<Refs>()(ModelBase
  .named('Comment')
  .props({
    __typename: types.optional(types.literal("Comment"), "Comment"),
    id: types.identifier,
    message: types.union(types.undefined, types.null, types.string),
    replyTo: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => CommentModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class CommentModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get message() { return this.__attr(`message`) }
  replyTo(builder?: string | CommentModelSelector | ((selector: CommentModelSelector) => CommentModelSelector)) { return this.__child(`replyTo`, CommentModelSelector, builder) }
}
export function selectFromComment() {
  return new CommentModelSelector()
}

export const commentModelPrimitives = selectFromComment().message
