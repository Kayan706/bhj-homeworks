let tabs  = document.querySelectorAll('.tab')
let content = document.querySelectorAll('.tab__content')



for (let tab of tabs) {
    tab.addEventListener('click', change)
}

function change(e) {

    for (let tab of tabs) {
        tab.className = 'tab';
    }
    e.target.className = 'tab tab_active';

    for (let art of content) {
        art.className = 'tab__content';
    }
    const index = Array.from(tabs).indexOf(e.target);
    content[index].className = 'tab__content tab__content_active';
}