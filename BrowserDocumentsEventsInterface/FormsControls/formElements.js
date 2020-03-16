// Form properties and methods

function print(...args){
	console.log(...args)
	console.log("--------------------------------")
}


print(document.forms)

print(form1.elements)

print(form1.elements.username)
print(form1.username, form1.password)

// Backreference

print(form1.username.form)

// Form elements

print("Username:", form1.username.value)
form1.username.value = "Hello World"
// print("Username", form1.username.value)
form1.username.setAttribute("value", "Old value changed")
// print(form1.username.value) // will not replace the value set directly

// Select element

print(form2.selectbox)
print(selectbox.value)

// set a new value

selectbox.selectedIndex = 2
print(selectbox.value)

selectbox.options[0].selected = true
print(selectbox.value)

selectbox.value = "orange"
print(selectbox.value)


// add new option

let opt = new Option("Newly added option", "purple", true, true)
print(opt)

selectbox.append(opt)

print(selectbox)

print(selectbox.value)