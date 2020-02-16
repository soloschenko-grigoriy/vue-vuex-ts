import { IProviderMock } from './provider.types'
import { mockArticlessService } from './articles'

export const mockProvider = (): IProviderMock => ({
  articles: mockArticlessService()
})
