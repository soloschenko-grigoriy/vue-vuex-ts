import { mockArticles, mockArticlesData, mockComments } from '@/entities'
import { ArticlesService } from './articles'

describe('>>> Articles Service', () => {
  const service = new ArticlesService(mockArticlesData())

  describe('>> getMany', () => {
    it('should return all data', () => {
      expect(service.getAll()).toEqual(mockArticlesData())
    })
  })

  describe('>> getOneById', () => {
    it('should return one article by provided id', () => {
      const article = mockArticles()[1]
      const id = article.id as number
      expect(service.getOneById(id)).toEqual(article)
    })

    it('should return undefined if no article found', () => {
      expect(service.getOneById(111111)).toBeUndefined()
    })
  })

  describe('>> createComment', () => {
    const data = mockComments()[0]
    it('should add new comment to provided article and return it', () => {
      const article = mockArticles()[0]
      const id = article.id as number
      const commentsAmount = article.comments.length

      const newArticle = service.createComment(id, data)
      expect(newArticle.id).toEqual(article.id)
      expect(newArticle.comments.length).toBe(commentsAmount + 1)
    })

    it('should throw an error if article with provided id doesn\'t exist', () => {
      expect(() => { service.createComment(11111, data) }).toThrow()
    })

    it('should throw an error if comment is not valid', () => {
      const data = {
        ...mockComments()[0],
        title: ''
      }
      expect(() => { service.createComment(1, data) }).toThrow()
    })
  })
})
