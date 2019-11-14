import { Instance, types } from 'mobx-state-tree';
import { RootStoreBase } from './RootStore.base';
import { BookModel } from './BookModel';

export interface RootStoreType extends Instance<typeof RootStore.Type> {}

export const RootStore = RootStoreBase.props({
  filteredBooks: types.optional(types.array(types.reference(BookModel)), []),
})

  .views(self => {
    function vfnbooks() {
      return [...self.books.values()].filter(book => !book.isDeleted);
    }
    return {
      vbooks() {
        return vfnbooks();
      },
      vfilteredBooks(author) {
        return vfnbooks().filter(book => {
          return (
            book.author === author || author === undefined || author === ''
          );
        });
      },
      get me() {
        return (
          [...self.users.values()][0] || {
            name: 'john doe',
            checkin: false,
            id: '',
          }
        );
      },
    };
  })
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self));
    },
  }));
