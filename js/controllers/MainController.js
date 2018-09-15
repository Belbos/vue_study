import FormView from '../views/FormView.js'
const tag = '[MainController]'

export default {
  init() {
    FormView.setup(document.querySelector('form'))
    .on('@submit', e => this.onSubmit(e.detail.input))
    .on('@reset', e => this.onResetFrom())
  },

  onSubmit(input){
    console.log(tag, 'onSubmit()', input)
  },

  onResetFrom(){
    console.log(tag,'OnResetForm()')
  }

  
}