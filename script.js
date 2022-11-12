const navbar = document.getElementById('navbar');

window.onscroll = () => {
    
    if(window.pageYOffset > 70 &&  window.pageYOffset < 800  ){
        navbar.classList.add("hidden")
        navbar.classList.add("black")
    }

    if(window.pageYOffset == 0 || window.pageYOffset >= 800){
        navbar.classList.remove("hidden")
    }
    if(window.pageYOffset == 0 ){
        navbar.classList.remove("black")

    }
}

const controller = document.getElementById('controller');
const videoContainer = document.querySelector('.video');
const media = document.getElementById('media');
console.log(controller)
controller.addEventListener('click', () => {
    controller.classList.toggle('active')

    if(!controller.classList.contains('active')){
        controller.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>'
        media.pause();

    }else{
        controller.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z"/></svg>'
        media.play();

    }
})
videoContainer.onmouseleave = () => {
    controller.style.opacity = 0;
}
videoContainer.onmouseenter = () => {
    controller.style.opacity = 1;
}