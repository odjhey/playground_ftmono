import { Instance } from "mobx-state-tree"
import { FileModelBase } from "./FileModel.base"

/* The TypeScript type of an instance of FileModel */
export interface FileModelType extends Instance<typeof FileModel.Type> {}

/* A graphql query fragment builders for FileModel */
export { selectFromFile, fileModelPrimitives, FileModelSelector } from "./FileModel.base"

/**
 * FileModel
 */
export const FileModel = FileModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
