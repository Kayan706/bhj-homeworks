const img = document.getElementById('loader')
const items = document.getElementById('items')

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses')
xhr.send()



console.log(items)

xhr.addEventListener('readystatechange', ()=> {
    if(xhr.readyState === xhr.DONE){
        console.log(xhr.response)
        img.remove()
        let data = JSON.parse(xhr.response).response.Valute
        console.log(data)
        for (let key in data) {
         items.insertAdjacentHTML("afterBegin",
            `<div class="item__code">
                    ${data[key].CharCode}
                </div>
                <div class="item__value">
                    ${data[key].Value}
                </div>
                <div class="item__currency">
                    руб.
                </div>`)
      }
         
}
})


