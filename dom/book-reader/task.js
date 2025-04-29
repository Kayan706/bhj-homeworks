let fonts = document.querySelectorAll('.font-size')
let books = document.querySelector('.book__content')

for (let font of fonts) {
    font.addEventListener('click', cli)

}

function cli(e) {
    for(let font of fonts){
        if(font.classList.contains('font-size_active') == true){
            font.classList.remove('font-size_active')
        }

    }
    this.classList.add('font-size_active')
    let atr = this.getAttribute('data-size')
    if (atr == 'big'){
        books.classList.add('book_fs-big')
        books.classList.remove('book_fs-small')
    }
    if(atr == 'small'){
        books.classList.add('book_fs-small')
        books.classList.remove('book_fs-big')
    }
    if(atr == null){
        books.classList.remove('book_fs-small')
        books.classList.remove('book_fs-big')
    }
    e.preventDefault()

}   