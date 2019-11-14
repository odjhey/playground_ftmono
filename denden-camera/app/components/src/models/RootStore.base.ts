/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { types } from "mobx-state-tree"
import { MSTGQLStore, configureStoreMixin, QueryOptions } from "mst-gql"

import { BookModel, BookModelType } from "./BookModel"
import { bookModelPrimitives, BookModelSelector } from "./BookModel.base"
import { UserModel, UserModelType } from "./UserModel"
import { userModelPrimitives, UserModelSelector } from "./UserModel.base"
import { FileModel, FileModelType } from "./FileModel"
import { fileModelPrimitives, FileModelSelector } from "./FileModel.base"


/**
* Store, managing, among others, all the objects received through graphQL
*/
export const RootStoreBase = MSTGQLStore
  .named("RootStore")
  .extend(configureStoreMixin([['Book', () => BookModel], ['User', () => UserModel], ['File', () => FileModel]], ['Book', 'User']))
  .props({
    books: types.optional(types.map(types.late(() => BookModel)), {}),
    users: types.optional(types.map(types.late(() => UserModel)), {})
  })
  .actions(self => ({
    queryBooks(variables?: {  }, resultSelector: string | ((qb: BookModelSelector) => BookModelSelector) = bookModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ books: BookModelType[]}>(`query books { books {
        ${typeof resultSelector === "function" ? resultSelector(new BookModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryUsers(variables?: {  }, resultSelector: string | ((qb: UserModelSelector) => UserModelSelector) = userModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ users: UserModelType[]}>(`query users { users {
        ${typeof resultSelector === "function" ? resultSelector(new UserModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    mutateCreateBook(variables: { title: string | undefined, author: string | undefined, checkin: boolean | undefined }, resultSelector: string | ((qb: BookModelSelector) => BookModelSelector) = bookModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ createBook: BookModelType}>(`mutation createBook($title: String, $author: String, $checkin: Boolean) { createBook(title: $title, author: $author, checkin: $checkin) {
        ${typeof resultSelector === "function" ? resultSelector(new BookModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateBook(variables: { id: string | undefined, title: string | undefined, author: string | undefined, checkin: boolean | undefined }, resultSelector: string | ((qb: BookModelSelector) => BookModelSelector) = bookModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateBook: BookModelType}>(`mutation updateBook($id: ID, $title: String, $author: String, $checkin: Boolean) { updateBook(id: $id, title: $title, author: $author, checkin: $checkin) {
        ${typeof resultSelector === "function" ? resultSelector(new BookModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateDeleteBook(variables: { id: string | undefined }, resultSelector: string | ((qb: BookModelSelector) => BookModelSelector) = bookModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ deleteBook: BookModelType}>(`mutation deleteBook($id: ID) { deleteBook(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new BookModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateCheckin(variables: { id: string | undefined, checkin: boolean | undefined }, resultSelector: string | ((qb: BookModelSelector) => BookModelSelector) = bookModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ checkin: BookModelType[]}>(`mutation checkin($id: ID, $checkin: Boolean) { checkin(id: $id, checkin: $checkin) {
        ${typeof resultSelector === "function" ? resultSelector(new BookModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateCreateUser(variables: { name: string | undefined }, resultSelector: string | ((qb: UserModelSelector) => UserModelSelector) = userModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ createUser: UserModelType}>(`mutation createUser($name: String) { createUser(name: $name) {
        ${typeof resultSelector === "function" ? resultSelector(new UserModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUserCheckin(variables: { id: string }, resultSelector: string | ((qb: UserModelSelector) => UserModelSelector) = userModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ userCheckin: UserModelType}>(`mutation userCheckin($id: ID!) { userCheckin(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new UserModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUploadFile(variables: { file: any }, resultSelector: string | ((qb: FileModelSelector) => FileModelSelector) = fileModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ uploadFile: FileModelType}>(`mutation uploadFile($file: Upload!) { uploadFile(file: $file) {
        ${typeof resultSelector === "function" ? resultSelector(new FileModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
  }))
