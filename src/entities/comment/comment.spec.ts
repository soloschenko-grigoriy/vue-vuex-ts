import { Comment } from './comment'
import { mockComments, mockCommentsData } from './comment.mock'

describe('>>> Comment', () => {
  it('should instantiate id only if it was provided', () => {
    const entity1 = new Comment({
      ...mockCommentsData()[0],
      id: 1
    })

    expect(entity1.id).toBe(1)

    const entity2 = new Comment({
      ...mockCommentsData()[0],
      id: undefined
    })

    expect(entity2.id).toBeUndefined()
  })

  describe('>> validate', () => {
    it('should fail validation if title is empty', () => {
      const entity = new Comment({
        ...mockCommentsData()[0],
        title: ''
      })

      expect(entity.validate()).toBeFalsy()
    })

    it('should fail validation if title is too long', () => {
      const entity = new Comment({
        ...mockCommentsData()[0],
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
      })

      expect(entity.validate()).toBeFalsy()
    })

    it('should fail validation if author name is empty', () => {
      const entity = new Comment({
        ...mockCommentsData()[0],
        author: ''
      })

      expect(entity.validate()).toBeFalsy()
    })

    it('should fail validation if author name is too long', () => {
      const entity = new Comment({
        ...mockCommentsData()[0],
        author: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
      })

      expect(entity.validate()).toBeFalsy()
    })

    it('should fail validation if content is empty', () => {
      const entity = new Comment({
        ...mockCommentsData()[0],
        content: ''
      })

      expect(entity.validate()).toBeFalsy()
    })

    it('should fail validation if content is too long', () => {
      const entity = new Comment({
        ...mockCommentsData()[0],
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel ante eget eros molestie rutrum ut ut odio. Nullam quis facilisis augue. Suspendisse potenti. Maecenas lobortis, nisl eget tempor convallis, leo est egestas nisi, a feugiat justo ipsum eget dolor. Duis in condimentum nisl, dapibus posuere leo. Nulla interdum ligula et hendrerit semper. Integer id nulla laoreet, auctor dolor non, tempus arcu. Ut scelerisque dolor vel consequat bibendum. Fusce fermentum, sapien non tincidunt egestas, quam ex ultrices risus, non dictum purus enim imperdiet dui. Quisque eget pulvinar enim, varius bibendum turpis. Aliquam vulputate posuere leo non euismod. Curabitur pretium cursus elit sed blandit. '
      })

      expect(entity.validate()).toBeFalsy()
    })

    it('should return true if entity is valid', () => {
      expect(mockComments()[0].validate()).toBeTruthy()
    })
  })
})
