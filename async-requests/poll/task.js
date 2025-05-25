const xhr = new XMLHttpRequest();
const title = document.querySelector(".poll__title");
const answer = document.querySelector(".poll__answers");
const xhr2 = new XMLHttpRequest();

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.responseType = 'json';
xhr.send();

function result(array) {
   const summ = array.reduce((sum, current) => sum + current.votes, 0);
   let text = '';
   for (let element of array) {
      text += `${element.answer}: ${(element.votes / summ * 100).toFixed(2)}%</br>`
   }
   answer.innerHTML = text;
}

xhr.addEventListener('readystatechange', () => {
   if (xhr.readyState === xhr.DONE) {
      let response = xhr.response.data;
      response.answers.forEach(e => {
         answer.insertAdjacentHTML("beforeend", `<button class="poll__answer"> ${e}</button>`);
      })
      title.insertAdjacentText("beforeend", `${response.title}`);
      const buttons = Array.from(document.querySelectorAll(".poll__answer"));
      for (let i = 0; i < buttons.length; i++) {
         buttons[i].addEventListener("click", () => {
            alert('Спасибо!');
            xhr2.open('POST', 'https://students.netoservices.ru/nestjs-backend/poll');
            xhr2.responseType = 'json';
            xhr2.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            xhr2.send(`vote=${xhr.response.id}&answer=${i}`);

            xhr2.addEventListener("readystatechange", () => {
               if (xhr2.readyState === xhr2.DONE) {
                  let array = xhr2.response.stat;
                  result(array);
               }
            })
         })
      }
   }
})