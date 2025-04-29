let rotator = Array.from(document.querySelectorAll('.rotator__case'))
let rotatorLength = rotator.length
let i = 0

setInterval(()=>{
    rotator[i].classList.remove('rotator__case_active');
        i++
    if (i == rotator.length) {i = 0};
        rotator[i].classList.add('rotator__case_active');
    }, 1000);
