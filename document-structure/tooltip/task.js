document.addEventListener("click", (e)=>{
    e.preventDefault()
    console.log(e.target.title)
    const t = document.querySelector('.tooltip_active')
    console.log(t)
    if(t){
        t.remove()
    }
    const add = e.target.insertAdjacentHTML('afterend', `<div class="tooltip tooltip_active">${e.target.title}</div>` )
    
})