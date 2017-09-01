import Vue from 'vue'
import Screen from '@/components/Screen'

describe('Login.vue', () => {
  it('should render a submit button', () => {
    const title = 'Le Title'
    const Constructor = Vue.extend(Screen)
    const vm = new Constructor({
      propsData: {
        title: title
      }
    }).$mount()
    expect(vm.$el.querySelector('b').textContent)
      .to.equal(title)
  })
})
