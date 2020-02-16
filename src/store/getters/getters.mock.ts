import { IGettersMock } from './getters.types'

export const mockGetters = (): IGettersMock => ({
  getAllArticles: jest.fn(),
  getOneArticlesById: jest.fn()
})
