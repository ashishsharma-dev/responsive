setTimeout(() => {
    alert('Created with ❤ by Ashish Sharma')
}, 5000);

let navBtn = document.querySelector('.nav-btn');
let navMenu = document.querySelector('.navMenu');
navMenu.style.display = 'none';

navBtn.addEventListener('click', function(){
    if (navMenu.style.display == 'block'){
        navMenu.style.display = 'none';
    } else{
        navMenu.style.display = 'block';
    }
})
console.log(navBtn, navMenu);

