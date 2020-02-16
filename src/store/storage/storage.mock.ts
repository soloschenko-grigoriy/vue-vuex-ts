import { IStorageMock } from './storage.types'

export const mockStorage = (): IStorageMock => ({
  getters: {
    getAllArticles: jest.fn(),
    getOneArticlesById: jest.fn()
  },
  actions: {
    fetchArticles: jest.fn(),
    createComment: jest.fn()
  },
  mutations: {
    fetchArticles: jest.fn(),
    createComment: jest.fn()
  }
})
