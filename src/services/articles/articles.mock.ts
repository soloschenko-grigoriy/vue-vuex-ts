import { IArticlesServiceMock } from './articles.types'
// import { mockArticlesData } from '@/entities/article/article.mock'
// import { IArticleData } from '@/entities'
// import { ArticlesService } from './articles'

// export const mockArticlessService = (data: IArticleData[] = mockArticlesData()): IArticlesService => new ArticlesService(data)

export const mockArticlessService = (): IArticlesServiceMock => ({
  getAll: jest.fn(),
  getOneById: jest.fn(),
  createComment: jest.fn()
})
