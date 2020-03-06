import { Context, ICreateCommentActionPayload, IActions } from './actions.types'

export const actions: IActions = {
  fetchArticles (): void {
    this.$storage.mutations.fetchArticles(this.$services.articles.getAll())
  },

  createComment (context: Context, payload: ICreateCommentActionPayload): void {
    const article = this.$services.articles.createComment(payload.articleId, payload.comment)

    this.$storage.mutations.createComment({ article, comment: payload.comment })
  }
}
