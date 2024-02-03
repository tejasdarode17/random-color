const boxes = document.querySelectorAll('.box');
const body = document.querySelector('body');

boxes.forEach(function (button) {
    button.addEventListener('click', function(e){
        body.style.backgroundColor = button.id
    })

})