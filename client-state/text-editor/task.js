const editor =  document.getElementById('editor')


editor.addEventListener('input', ()=>{
    if(editor.value){
        localStorage.value = editor.value;
    }
    
})

if (localStorage.length > 0) {
   editor.value = localStorage.value;
}