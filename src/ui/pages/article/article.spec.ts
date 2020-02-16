import Vue from 'vue'
import Vuetify from 'vuetify'
import { ArticlePage } from './article'
import { mount, createLocalVue, Wrapper } from '@vue/test-utils'
import VueRouter from 'vue-router'
import { mockStorage } from '@/store'
import { mockArticle } from '@/entities'

Vue.use(Vuetify)
Vue.use(VueRouter)

const localVue = createLocalVue()
const storage = mockStorage()

storage.getters.getOneArticlesById.mockReturnValueOnce(mockArticle()[0])

describe('>>> ArticlePage', () => {
  let wrapper: Wrapper<ArticlePage>

  beforeEach(() => {
    wrapper = mount(ArticlePage, {
      localVue,
      vuetify: new Vuetify(),
      router: new VueRouter(),
      mocks: {
        $storage: storage
      }
    })
  })

  it('should render container and row', () => {
    expect(wrapper.find('.container')).toBeDefined()
    expect(wrapper.find('.row')).toBeDefined()
  })
})
