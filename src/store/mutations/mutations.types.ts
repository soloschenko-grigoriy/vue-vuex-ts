import { IArticle } from '@/entities'
import { IState } from '../store.types'
import { MutationTree, Store } from 'vuex'

export interface IMutations extends MutationTree<IState> {
  fetchArticles (this: Store<IState>, state: IState, payload: IArticle[]): void
  createComment (this: Store<IState>, state: IState, payload: IArticle): void
}

export interface IMutationsMock extends IMutations {
  fetchArticles: jest.Mock<void>
  createComment: jest.Mock<void>
}
