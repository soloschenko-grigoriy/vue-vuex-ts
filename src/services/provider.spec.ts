import { provider } from './provider'
import { ArticlesService } from './articles'

jest.mock('./articles')
describe('>> Provider', () => {
  it('should instantiate Articles Service', () => {
    provider()
    expect(ArticlesService.prototype.constructor).toBeCalled()
  })
})
