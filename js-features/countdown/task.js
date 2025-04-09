const tmr = function(){
    const timer = document.getElementById('timer')
    if(Number(timer.textContent) === 0){
        alert("Вы победили в конкурсе!")
        location.reload()        
    }
    timer.textContent -= 1
}

setInterval(tmr, 1000)