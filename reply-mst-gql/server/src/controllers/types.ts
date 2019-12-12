interface IDBModel<T> {
  insert: (input: any) => PromiseLike<T>;
}
