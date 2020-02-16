import Vue from 'vue'
import Vuetify from 'vuetify'
import { HomePage } from './home'
import { mount, createLocalVue, Wrapper } from '@vue/test-utils'
import VueRouter from 'vue-router'
import { mockStorage } from '@/store'
import { mockArticles } from '@/entities'

Vue.use(Vuetify)
Vue.use(VueRouter)

const localVue = createLocalVue()
const storage = mockStorage()

storage.getters.getAllArticles.mockReturnValueOnce(mockArticles())

describe('>>> HomePage', () => {
  let wrapper: Wrapper<HomePage>

  beforeEach(() => {
    wrapper = mount(HomePage, {
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
