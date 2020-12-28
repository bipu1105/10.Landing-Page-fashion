var input = document.querySelector('.search-input');
var searchIcon = document.querySelector('.search-icon');
var move = document.querySelector('.move i');
var aside = document.querySelector('.aside ul');
var contact = document.querySelector('.contact');
var effect = document.querySelectorAll('.effect div');
var cross = document.querySelector('.cross');
var social = document.querySelector('.social');



searchIcon.addEventListener('click',function(){
    input.classList.toggle('input-js')
});

move.addEventListener('click',function(){
    aside.classList.toggle('aside-js')
})

contact.addEventListener('click',function(){
    effect.forEach(function(element){
        element.style.height = '50%';
        element.style.width = '50%';
    })
    social.classList.add('social-js')
})

cross.addEventListener('click',function(){
    effect.forEach(function(element){
        element.style.height = '0%';
        element.style.width = '0%';
    })
    social.classList.remove('social-js')
})