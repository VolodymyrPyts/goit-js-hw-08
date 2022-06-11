import throttle from 'lodash.throttle';

const refs = {
    form: document.querySelector(".feedback-form"),
    textArea: document.querySelector(".feedback-form textarea"),
    inputEl: document.querySelector(".feedback-form input")
}
const KEYMSG = "message"
const KEYEMAIL = "email"
const formData =[]
refs.form.addEventListener("submit", onFormSubmit);
refs.textArea.addEventListener("input", throttle(onClickInput, 500))
// refs.textArea.addEventListener("input", onClickInput)

refs.form.addEventListener("input", e => {
   
    formData[e.target.name] = e.target.value
    localStorage.setItem([e.target.name], e.target.value)
})




function onFormSubmit(e) {
    e.preventDefault()
    e.currentTarget.reset()
    localStorage.removeItem(KEYMSG)
    localStorage.removeItem(KEYEMAIL)
}    
function onClickInput(e) {

    localStorage.setItem(KEYMSG, value)

}


textAreaSave()
function textAreaSave() {
  
    const saveMasege = localStorage.getItem(KEYMSG)
    const saveEmail = localStorage.getItem(KEYEMAIL)
    if (saveMasege || saveEmail) {
        refs.textArea.value = saveMasege
        refs.inputEl.value = saveEmail
    }
}