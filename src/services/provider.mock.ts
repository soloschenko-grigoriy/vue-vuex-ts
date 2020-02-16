import { IProviderMock } from './provider.types'
import { mockArticlesService } from './articles'

export const mockProvider = (): IProviderMock => ({
  articles: mockArticlesService()
})
