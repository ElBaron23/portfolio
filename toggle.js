var nav_btn =document.getElementById('nav_btn'),
    list    =document.getElementById('list');


nav_btn.addEventListener('click',()=>{
    nav_btn.classList.toggle('active');
    list.classList.toggle('toggle');
})

