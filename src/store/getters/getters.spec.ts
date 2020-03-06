import { getters } from './getters'
import { mockState, mockStore } from '../store.mock'

describe('>>> Getters', () => {
  const state = mockState()
  const store = mockStore()

  describe('>> getAllArticles', () => {
    it('should return all articles from the store', () => {
      expect(getters.getAllArticles.bind(store)(state)).toStrictEqual(state.articles)
    })
  })

  describe('>> getOneArticlesById', () => {
    it('should return one article by provided id from the store', () => {
      const id = state.articles[0].id as number
      expect(getters.getOneArticlesById.bind(store)(state)(id)).toStrictEqual(state.articles[0])
    })

    it('should return undefined if store has no such article', () => {
      expect(getters.getOneArticlesById.bind(store)(state)(1111)).toBeUndefined()
    })
  })
})
