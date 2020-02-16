import { makeStorage } from './storage'
import { mockStore } from '../store.mock'
import { mockCreateCommentActionPayload } from '../actions/actions.mock'
import { mockArticles } from '@/entities'

describe('>>> Storage', () => {
  const store = mockStore()
  const storage = makeStorage(store)

  describe('>> Getters', () => {
    it('should proxy getAllArticles', () => {
      expect(storage.getters.getAllArticles()).toBe(store.getters.getAllArticles)
    })

    it('should proxy getOneArticlesById', () => {
      const id = 111
      const result = storage.getters.getOneArticlesById(id)
      expect(store.getters.getOneArticlesById).toBeCalledWith(id)
      expect(result).toBe(store.getters.getOneArticlesById(id))
    })
  })

  describe('>> Actions', () => {
    it('should proxy fetchArticles', () => {
      storage.actions.fetchArticles()
      expect(store.dispatch).toBeCalledWith('fetchArticles')
    })

    it('should proxy createComment', () => {
      const payload = mockCreateCommentActionPayload()
      storage.actions.createComment(payload)
      expect(store.dispatch).toBeCalledWith('createComment', payload)
    })
  })

  describe('>> Mutations', () => {
    it('should proxy fetchArticles', () => {
      const payload = mockArticles()
      storage.mutations.fetchArticles(payload)
      expect(store.commit).toBeCalledWith('fetchArticles', payload)
    })

    it('should proxy createComment', () => {
      const payload = mockArticles()[0]
      storage.mutations.createComment(payload)
      expect(store.commit).toBeCalledWith('createComment', payload)
    })
  })
})
