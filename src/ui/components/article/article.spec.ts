import Vue from 'vue'
import Vuetify from 'vuetify'
import { ArticleComponent } from './article'
import { mount, createLocalVue, Wrapper } from '@vue/test-utils'
import VueRouter from 'vue-router'
import { mockArticles } from '@/entities'

Vue.use(Vuetify)
Vue.use(VueRouter)

const localVue = createLocalVue()
const article = mockArticles()[0]

describe('>>> Article Component', () => {
  let wrapper: Wrapper<ArticleComponent>

  beforeEach(() => {
    wrapper = mount(ArticleComponent, {
      localVue,
      vuetify: new Vuetify(),
      router: new VueRouter(),
      propsData: { article }
    })
  })

  it('should render article', () => {
    expect(wrapper.find('.v-card__title').text()).toBe(article.title)
    expect(wrapper.find('.v-card__text').text()).toBe(article.short)
    expect(wrapper.find('.v-btn').attributes('href')).toBe(`#/articles/${article.id}`)
  })
})
