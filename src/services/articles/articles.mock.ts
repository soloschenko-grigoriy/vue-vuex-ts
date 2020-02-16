import { IArticlesServiceMock } from './articles.types'
// import { mockArticleData } from '@/entities/article/article.mock'
// import { IArticleData } from '@/entities'
// import { ArticlesService } from './articles'

// export const mockArticlesService = (data: IArticleData[] = mockArticleData()): IArticlesService => new ArticlesService(data)

export const mockArticlesService = (): IArticlesServiceMock => ({
  getAll: jest.fn(),
  getOneById: jest.fn(),
  createComment: jest.fn()
})
