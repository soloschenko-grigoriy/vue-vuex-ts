import { IArticle, Article } from '@/entities'
import { IState } from '../store.types'
import { IGetters } from './getters.types'

export const getters: IGetters = {
  getAllArticles (state: IState): IArticle[] {
    return state.articles.map(data => new Article(data))
  },

  getOneArticlesById: (state: IState) => (id: number): IArticle | undefined => {
    const data = state.articles.find(article => article.id === id)
    if (!data) {
      return
    }

    return new Article(data)
  }
}
