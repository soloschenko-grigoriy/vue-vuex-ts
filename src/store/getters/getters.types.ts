import { IState, IRootState } from '../store.types'
import { IArticle } from '@/entities'
import { GetterTree, Store } from 'vuex'

export interface IGetters extends GetterTree<IState, IRootState> {
  getAllArticles (this: Store<IState>, state: IState): IArticle[]
  getOneArticlesById (this: Store<IState>, state: IState): (id: number) => IArticle | undefined
}

export interface IGettersMock {
  getAllArticles: jest.Mock<IArticle[]>
  getOneArticlesById: jest.Mock<(id: number) => IArticle | undefined>
}
