/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * FileBase
 * auto generated base class for the model FileModel.
 */
export const FileModelBase = ModelBase
  .named('File')
  .props({
    __typename: types.optional(types.literal("File"), "File"),
    file: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class FileModelSelector extends QueryBuilder {
  get file() { return this.__attr(`file`) }
}
export function selectFromFile() {
  return new FileModelSelector()
}

export const fileModelPrimitives = selectFromFile().file
