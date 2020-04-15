import { IArticle, ICommentData, IArticleData } from '@/entities'

export interface IArticlesService {
  getAll (): IArticleData[]
  getOneById (id: number): IArticle | undefined
  createComment (id: number, data: ICommentData): IArticle
}

export interface IArticlesServiceMock {
  getAll: jest.Mock <IArticleData[]>
  getOneById: jest.Mock<IArticle | undefined>
  createComment: jest.Mock <IArticle>
}
