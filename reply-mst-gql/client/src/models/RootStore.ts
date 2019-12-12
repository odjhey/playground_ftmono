import {Instance} from 'mobx-state-tree';
import {RootStoreBase} from './RootStore.base';
import {selectFromComment} from './CommentModel.base';

const COMMENT_FRAGMENT = selectFromComment()
  .id.message.replyTo(r => r.id.message)
  .toString();

export interface RootStoreType extends Instance<typeof RootStore.Type> {}

export const RootStore = RootStoreBase.actions(self => ({
  // This is an auto-generated example action.
  log() {
    console.log(JSON.stringify(self));
  },

  retrieveComments() {
    return self.queryComments({}, COMMENT_FRAGMENT);
  },
}));
