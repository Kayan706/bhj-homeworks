const div = document.querySelector(".dropdown__value")

div.onclick = function(){
    const ul = document.querySelector("ul")
    ul.classList.toggle('dropdown__list_active')
    const a = document.querySelectorAll('a')
    let array = Array.from(a)
    array.forEach((e) =>{
        e.onclick = function(event){
            div.textContent = e.textContent
            event.preventDefault()
        }
    })
}