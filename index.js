var Xray = require('x-ray')
var x = Xray()

var englishPage = 'http://englishgraammar.blogspot.pe/2015/08/1000-english-verbs-forms.html'

x(englishPage, 'table tr', [{
    id : 'td:nth-child(1)',
    baseForm : 'td:nth-child(2)',
    pastForm : 'td:nth-child(3)',
    pastParticipleForm : 'td:nth-child(4)',
    sEsIesForm : 'td:nth-child(5)',
    ingForm : 'td:nth-child(6)'
}]).write('verbs.json')