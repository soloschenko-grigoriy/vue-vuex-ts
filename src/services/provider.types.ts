import { IArticlesService, IArticlesServiceMock } from './articles'

export interface IProvider {
  articles: IArticlesService
}

export interface IProviderMock {
  articles: IArticlesServiceMock
}
