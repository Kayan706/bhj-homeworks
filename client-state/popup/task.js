const modal = document.querySelector('.modal')
const modalClose = document.querySelector('.modal__close')

if(document.cookie != 'close'){
    modal.classList.add('modal_active')
    modalClose.addEventListener('click', ()=>{
        modal.classList.remove('modal_active')
        document.cookie = 'close'
    })
}
