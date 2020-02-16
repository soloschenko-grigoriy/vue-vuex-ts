import { IArticle, ICommentData } from '@/entities'

export interface IArticlesService {
  getAll (): IArticle[]
  getOneById (id: number): IArticle | undefined
  createComment (id: number, data: ICommentData): IArticle
}

export interface IArticlesServiceMock {
  getAll: jest.Mock <IArticle[]>
  getOneById: jest.Mock<IArticle | undefined>
  createComment: jest.Mock <IArticle>
}
