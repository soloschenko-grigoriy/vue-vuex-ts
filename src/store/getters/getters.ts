import { IArticle } from '@/entities'
import { IState } from '../store.types'
import { IGetters } from './getters.types'

export const getters: IGetters = {
  getAllArticles (state: IState): IArticle[] {
    return state.articles
  },
  getOneArticlesById: (state: IState) => (id: number): IArticle | undefined => {
    return state.articles.find(article => article.id === id)
  }
}
