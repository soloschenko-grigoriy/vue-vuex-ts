import { IMutations, IMutationsCreateCommentMutationPayload } from './mutations.types'
import { IArticle } from '@/entities'
import { IState } from '../store.types'

export const mutations: IMutations = {
  fetchArticles (state: IState, payload: IArticle[]): void {
    payload.map(article => state.articles.push(article))
  },

  createComment (state: IState, payload: IMutationsCreateCommentMutationPayload): void {
    const article = state.articles.find(article => article.id === payload.article.id)
    if (!article) {
      state.articles.push(payload.article)
      return
    }

    article.comments.push(payload.comment)
  }
}
