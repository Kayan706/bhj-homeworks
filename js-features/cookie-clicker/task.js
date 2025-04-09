const cookie = document.getElementById('cookie')

cookie.onclick = function(){
    const counter = document.getElementById('clicker__counter')
    counter.textContent = Number(counter.textContent) + 1
    setTimeout(()=>{
        cookie.width = 200
    }, 100)
    cookie.width = 150


}