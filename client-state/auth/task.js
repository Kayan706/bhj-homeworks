const form = document.getElementById("signin__form");
const signin = document.getElementById('signin')
const wel = document.querySelector('.welcome')
const user = document.getElementById('user_id')


const xhr = new XMLHttpRequest()
const url = 'https://students.netoservices.ru/nestjs-backend/auth'

function show() {
   signin.classList.remove("signin_active");
   wel.classList.add("welcome_active");
   user.textContent = localStorage.getItem(`user_id`);
}
if (localStorage.user_id) {
   show();
} else{

    form.addEventListener('submit', (e)=>{
        e.preventDefault();
        const formData = new FormData(form);
        xhr.open('POST', url)
        xhr.send(formData)
        xhr.onload = function () {  
        if (xhr.status >= 200 && xhr.status < 400) {    
            const data = JSON.parse(xhr.responseText).success;
            if(data == false){
                alert("Неверный логин/пароль");
                form.reset();  
            } else{
                signin.classList.remove('signin_active')
                wel.classList.add('welcome_active')
                const id = JSON.parse(xhr.response).user_id
                user.textContent = id
                console.log(user)
                localStorage.setItem(`user_id`, id);
                localStorage.setItem(`sign`, "signed in");
            }
        } else {   
            alert("Неверный логин/пароль");
            form.reset();
        }  
    };
    })
}


