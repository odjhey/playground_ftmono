/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { ObservableMap } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLStore, configureStoreMixin, QueryOptions, withTypedRefs } from "mst-gql"

import { CommentModel, CommentModelType } from "./CommentModel"
import { commentModelPrimitives, CommentModelSelector } from "./CommentModel.base"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  comments: ObservableMap<string, CommentModelType>
}

/**
* Store, managing, among others, all the objects received through graphQL
*/
export const RootStoreBase = withTypedRefs<Refs>()(MSTGQLStore
  .named("RootStore")
  .extend(configureStoreMixin([['Comment', () => CommentModel]], ['Comment']))
  .props({
    comments: types.optional(types.map(types.late((): any => CommentModel)), {})
  })
  .actions(self => ({
    queryComments(variables?: {  }, resultSelector: string | ((qb: CommentModelSelector) => CommentModelSelector) = commentModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ comments: CommentModelType[]}>(`query comments { comments {
        ${typeof resultSelector === "function" ? resultSelector(new CommentModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
  })))
