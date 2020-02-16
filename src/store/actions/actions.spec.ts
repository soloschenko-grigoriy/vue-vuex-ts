import { mockActionsContext, mockCreateCommentActionPayload } from './actions.mock'
import { mockArticle, mockComment } from '@/entities'
import { actions } from './actions'
import { mockStore } from '../store.mock'

describe('>>> Actions', () => {
  describe('>> fetchArticles', () => {
    const store = mockStore()
    const context = mockActionsContext()
    const articles = mockArticle()

    it('should fetch all data and then commit articles mutation', () => {
      store.$services.articles.getAll.mockReturnValueOnce(articles)

      actions.fetchArticles.bind(store)(context)

      expect(store.$services.articles.getAll).toBeCalled()
      expect(store.$storage.mutations.fetchArticles).toBeCalledWith(articles)
    })

    it('should call service to create new comment and then creation mutation', () => {
      const payload = mockCreateCommentActionPayload()
      const article = articles[0]
      const comment = mockComment()[0]
      article.comments.push(comment)

      store.$services.articles.createComment.mockReturnValueOnce(article)

      actions.createComment.bind(store)(context, payload)

      expect(store.$services.articles.createComment).toBeCalledWith(payload.articleId, payload.comment)
      expect(store.$storage.mutations.createComment).toBeCalledWith(article)
    })
  })
})
