import { Instance } from 'mobx-state-tree';
import { BookModelBase } from './BookModel.base';

/* The TypeScript type of an instance of BookModel */
export interface BookModelType extends Instance<typeof BookModel.Type> {}

/* A graphql query fragment builders for BookModel */
export {
  selectFromBook,
  bookModelPrimitives,
  BookModelSelector,
} from './BookModel.base';

/**
 * BookModel
 */
export const BookModel = BookModelBase.actions(self => ({
  like() {},
}));
