const circle = document.querySelector('.circle');
const logos = document.querySelectorAll('.circle i');
console.log(logos)

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

const images = document.querySelectorAll('.box img');

for (let i = 0; i < images.length; i++) {
    images[i].addEventListener('click', function() {
        this.nextElementSibling.classList.toggle('hidden');
    })
}

