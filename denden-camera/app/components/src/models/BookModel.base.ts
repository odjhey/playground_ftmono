/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * BookBase
 * auto generated base class for the model BookModel.
 */
export const BookModelBase = ModelBase
  .named('Book')
  .props({
    __typename: types.optional(types.literal("Book"), "Book"),
    id: types.identifier,
    title: types.union(types.undefined, types.null, types.string),
    author: types.union(types.undefined, types.null, types.string),
    checkin: types.union(types.undefined, types.null, types.boolean),
    isDeleted: types.union(types.undefined, types.null, types.boolean),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class BookModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get title() { return this.__attr(`title`) }
  get author() { return this.__attr(`author`) }
  get checkin() { return this.__attr(`checkin`) }
  get isDeleted() { return this.__attr(`isDeleted`) }
}
export function selectFromBook() {
  return new BookModelSelector()
}

export const bookModelPrimitives = selectFromBook().title.author.checkin.isDeleted
