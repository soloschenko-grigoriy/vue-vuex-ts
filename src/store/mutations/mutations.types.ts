import { IArticle, ICommentData, IArticleData } from '@/entities'
import { IState } from '../store.types'
import { MutationTree, Store } from 'vuex'

export interface IMutations extends MutationTree<IState> {
  fetchArticles (this: Store<IState>, state: IState, payload: IArticleData[]): void
  createComment (this: Store<IState>, state: IState, payload: IMutationsCreateCommentMutationPayload): void
}

export interface IMutationsMock extends IMutations {
  fetchArticles: jest.Mock<void>
  createComment: jest.Mock<void>
}

export interface IMutationsCreateCommentMutationPayload {
  article: IArticle
  comment: ICommentData
}
