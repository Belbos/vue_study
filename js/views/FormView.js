import View from "./View.js"

const tag = '[FormView]'

const FormView = Object.create(View)

FormView.setup = function (el){
    this.init(el)
    this.inputEl = el.querySelector('[type=text]')
    this.resetEl = el.querySelector('[type=reset]')
    this.showResetBun(false)
    this.bindEvets()
    return this
}

FormView.showResetBun = function (show = true) {
    this.resetEl.style.display = show ? 'block' :'none'
}

FormView.bindEvets = function (){
    this.inputEl.addEventListener('keyup', e => this.onKeyup(e))
}

FormView.onKeyup = function (){
    this.showResetBun(this.inputEl.value.length)
}

export default FormView