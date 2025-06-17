const input = document.querySelector('.tasks__input')
const button = document.querySelector('.tasks__add')
const list = document.querySelector('.tasks__list')

button.addEventListener('click', (e) => {
    e.preventDefault()
    if(input.value.trim() === '') {
        return
    } 
    list.insertAdjacentHTML('beforeEnd', `<div class="task"><div class="task__title">${input.value}</div><a href="#" class="task__remove">&times;</a></div>`);
    input.value = ''
})

list.addEventListener('click', e => {
    e.preventDefault()
    if(e.target.classList.value == 'task__remove'){
        e.target.parentElement.remove()
    }
})
