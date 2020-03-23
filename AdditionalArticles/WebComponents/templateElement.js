// Template Element

let elem = document.createElement('div')

elem.append(tmpl.content.cloneNode(true))

document.body.append(elem)
