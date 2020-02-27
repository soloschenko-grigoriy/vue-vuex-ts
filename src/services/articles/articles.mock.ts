import { IArticlesServiceMock } from './articles.types'

export const mockArticlesService = (): IArticlesServiceMock => ({
  getAll: jest.fn(),
  getOneById: jest.fn(),
  createComment: jest.fn()
})
