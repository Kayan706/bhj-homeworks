const hole = document.querySelectorAll('.hole')
const dead = document.getElementById("dead")
const lost = document.getElementById("lost")
let win = 0;
let lose = 0;



for (i = 0; i < hole.length; i++){
    hole[i].onclick = press;
  }



function press() {
    if(this.className.includes('hole_has-mole')){
        win += 1;
        dead.textContent = win;
    } else {
        lose += 1;
        lost.textContent = lose;
    }
    if(win == 10){
        alert('Вы победили!')
        win = 0;
        dead.textContent = win;
        lose = 0;
        lost.textContent = lose;
    }
    if(lose == 5){
        alert('Вы проиграли!')
        lose = 0;
        lost.textContent = lose;
        win = 0;
        dead.textContent = win;
    }
}

