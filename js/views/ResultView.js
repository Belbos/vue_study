import View from './View.js'


const tag ='[ResultVie]';

const ResultView = Object.create(View)

ResultView.setup = function (el){
    this.init(el)
}

ResultView.rendner = function (data = []){
    console.log(tag, 'render()', data)
    this.el.innerHTML = data.length ? this.getSearchResultsHtml(data) : '검색 결과가 없습니다'
}

ResultView.getSearchResultsHtml = function (data){
    debugger
}


export default ResultView