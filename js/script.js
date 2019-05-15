const circle = document.querySelector('.circle');
const logos = document.querySelectorAll('.circle i');
const images = document.querySelectorAll('.box img');
const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const firstSection = document.querySelector('.first-section');
const secondSection = document.querySelector('.second-section')

circle.addEventListener('mouseenter', function(){
    this.classList.toggle('bg-light');
    for (let i = 0; i < logos.length; i++) {
        logos[i].classList.toggle('text-light');

    }
});

circle.addEventListener('mouseleave', function(){
    this.classList.toggle('bg-light');
    for (let i = 0; i < logos.length; i++) {
        logos[i].classList.toggle('text-light');

    }
})



for (let i = 0; i < images.length; i++) {
    images[i].addEventListener('click', function() {
        this.nextElementSibling.classList.toggle('hidden');
    })
}

btn1.addEventListener('click', function(){
    firstSection.classList.toggle('hidden');
    secondSection.classList.toggle('hidden')

});

btn2.addEventListener('click', function(){
    firstSection.classList.toggle('hidden');
    secondSection.classList.toggle('hidden')
})