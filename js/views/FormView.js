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
    this.on('submit', e => e.preventDefault())
    this.inputEl.addEventListener('keyup', e => this.onKeyup(e))
    this.resetEl.addEventListener('click', e => this.onClickReset(e))
}

FormView.onClickReset = function (e){
    this.emit('@reset')
    this.showResetBun(false)
}

FormView.onKeyup = function (e){
    const enter = 13
    
    this.showResetBun(this.inputEl.value.length)
    if(!this.inputEl.value.length) this.emit('@reset')
    if(e.keyCode !== enter ) return
    this.emit('@submit', {input:this.inputEl.value}) 
}

export default FormView