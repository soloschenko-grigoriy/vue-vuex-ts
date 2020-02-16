import { getters } from './getters'
import { mockState, mockStore } from '../store.mock'

describe('>>> Getters', () => {
  const state = mockState()
  const store = mockStore()

  describe('>> getAllArticles', () => {
    it('should return all articles from the store', () => {
      expect(getters.getAllArticles.bind(store)(state)).toBe(state.articles)
    })
  })

  describe('>> getOneArticlesById', () => {
    it('should return one article by provided id from the store', () => {
      const id = state.articles[0].id as number
      expect(getters.getOneArticlesById.bind(store)(state)(id)).toBe(state.articles[0])
    })
  })
})
