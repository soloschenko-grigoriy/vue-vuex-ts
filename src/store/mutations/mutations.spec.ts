import { mutations } from './mutations'
import { mockState, mockStore } from '../store.mock'
import { mockArticles } from '@/entities'

describe('>>> Mutations', () => {
  describe('>> fetchArticles', () => {
    it('should add all provided articles tot the store', () => {
      const state = mockState()
      const payload = mockArticles()
      const expected = {
        ...state,
        articles: [
          ...state.articles,
          ...payload
        ]
      }

      mutations.fetchArticles.bind(mockStore())(state, payload)

      expect(state).toEqual(expected)
    })
  })

  describe('>> createComment', () => {
    const state = mockState()
    const payload = mockArticles()[0]

    it('should create new article if it doesn\'t exist in the store yet', () => {
      state.articles = []

      mutations.createComment.bind(mockStore())(state, payload)

      expect(state.articles).toEqual([payload])
    })
  })
})
