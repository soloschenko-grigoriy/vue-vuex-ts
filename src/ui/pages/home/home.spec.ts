import Vue from 'vue'
import Vuetify from 'vuetify'
import { HomePage } from './home'
import { mount, createLocalVue, Wrapper } from '@vue/test-utils'
import VueRouter from 'vue-router'

Vue.use(Vuetify)
Vue.use(VueRouter)

const localVue = createLocalVue()

describe('>>> HomePage', () => {
  let wrapper: Wrapper<HomePage>

  beforeEach(() => {
    wrapper = mount(HomePage, {
      localVue,
      vuetify: new Vuetify(),
      router: new VueRouter()
    })
  })

  it('should render container and row', () => {
    expect(wrapper.find('.container')).toBeDefined()
    expect(wrapper.find('.row')).toBeDefined()
  })
})
