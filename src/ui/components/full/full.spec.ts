import Vue from 'vue'
import Vuetify from 'vuetify'
import { FullComponent } from './full'
import { mount, createLocalVue, Wrapper } from '@vue/test-utils'
import VueRouter from 'vue-router'
import { mockStorage } from '@/store'
import { mockArticles, mockComments } from '@/entities'

Vue.use(Vuetify)
Vue.use(VueRouter)

const localVue = createLocalVue()
const article = mockArticles()[0]

const comment1 = mockComments()[0]
const comment2 = mockComments()[1]
article.comments.push(comment1)
article.comments.push(comment2)

describe('>>> Article Component', () => {
  let wrapper: Wrapper<FullComponent>

  beforeEach(() => {
    wrapper = mount(FullComponent, {
      localVue,
      vuetify: new Vuetify(),
      router: new VueRouter(),
      mocks: {
        $storage: mockStorage()
      },
      propsData: { article }
    })
  })

  it('should render article', () => {
    expect(wrapper.find('.v-card__title').text()).toBe(article.title)
    expect(wrapper.find('.v-card__text').text()).toContain(article.content)
  })

  it('should render comments', () => {
    expect(wrapper.findAll('.v-list-item').length).toBe(article.comments.length)
  })

  it('should create new comment when form is submitted', () => {
    const title = 'title'
    const author = 'author'
    const content = 'content'

    wrapper.findAll('.v-input').at(0).vm.$emit('input', author)
    wrapper.findAll('.v-input').at(1).vm.$emit('input', title)
    wrapper.findAll('.v-input').at(2).vm.$emit('input', content)

    wrapper.find('.v-form').vm.$emit('submit', { preventDefault: jest.fn() })
    expect(wrapper.vm.$storage.actions.createComment).toBeCalledWith({
      articleId: article.id as number,
      comment: {
        title,
        author,
        content
      }
    })
  })
})
