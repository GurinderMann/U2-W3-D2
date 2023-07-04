const input = document.getElementById ('testo')
const saveButton = document.getElementById('save')
const resetButton = document.getElementById('delete')
const saved = document.getElementById ('saved')



function save (){
    const text = input.value
    if (text){
        localStorage.setItem('user', text)
        alert('Saved')
        saved.innerText = text
    } else{
        alert('ERORR  404')
    }
  

}


function reset (){

     input.value = ''
     localStorage.removeItem('user')
     alert('Deleted')
     saved.innerText =''
}


saveButton.addEventListener('click', save)
resetButton.addEventListener('click', reset)