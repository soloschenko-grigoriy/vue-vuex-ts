import { ArticlesService } from './articles'
import data from './data.json'
import { IProvider } from './provider.types'

export const provider = (): IProvider => ({
  articles: new ArticlesService(data)
})
