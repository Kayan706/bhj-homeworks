const reveal = Array.from(document.querySelectorAll('.reveal'));

window.addEventListener('scroll', function() {
  let scroll = window.innerHeight;
  let point = reveal.map(element => element.getBoundingClientRect());

  for (i=0;i<reveal.length;i++){
    if (point[i].top - 50 < scroll) {
    reveal[i].classList.add('reveal_active');
    }
  }
});