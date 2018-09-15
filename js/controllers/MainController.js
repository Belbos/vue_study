import FormView from '../views/FormView.js'
import ResultView from '../views/ResultView.js'
import SearchModel from '../models/SearchModel.js'

const tag = '[MainController]'

export default {
  init() {
    FormView.setup(document.querySelector('form'))
    .on('@submit', e => this.onSubmit(e.detail.input))
    .on('@reset', e => this.onResetFrom())

    ResultView.setup(document.querySelector('#search-result'))
  },

  search(query){
    console.log(tag, 'search()', query)
    SearchModel.list(query).then(data =>{
      this.onSearchResult(data)
    })
    this.onSearchResult([])
  },

  onSubmit(input){
    console.log(tag, 'onSubmit()', input)
    this.search(input)
  },

  onResetFrom(){
    console.log(tag,'OnResetForm()')
  },

  onSearchResult(data){
    console.log(tag, 'OnresetForm()')
    ResultView.rendner(data)
  }

}