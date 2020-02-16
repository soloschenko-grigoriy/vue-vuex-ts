import { IArticleData, IArticle } from './article.types'
import { Article } from './article'

export const mockArticleData = (): IArticleData[] => [{
  id: 1,
  title: 'title',
  content: 'content',
  short: 'short',
  createdAt: '2019-12-19T11:54:04 +05:00',
  isActive: false,
  picture: 'http://image.img',
  tags: ['z', 'x', 'y'],
  comments: []
}, {
  id: 2,
  title: 'title2',
  content: 'content2',
  short: 'short2',
  createdAt: '2019-12-07T11:54:04 +05:00',
  isActive: true,
  picture: 'http://image.img',
  tags: ['z', 'x', 'y'],
  comments: []
}]

export const mockArticle = (data: IArticleData[] = mockArticleData()): IArticle[] => data.map(item => new Article(item))
