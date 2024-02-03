const boxes = document.querySelectorAll('.box');
const body = document.querySelector('body');
const startButton = document.querySelector(".start-button");
const stopButton = document.querySelector(".stop-button");


let id
startButton.addEventListener('click',(e)=>{
        id = setInterval(() => {
                const red = Math.floor(Math.random() * 256);
                const green = Math.floor(Math.random() * 256);
                const blue = Math.floor(Math.random() * 256);
                const rgb = `rgb(${red}, ${green}, ${blue})`;
                document.body.style.backgroundColor = rgb;
            }, 300);
})

stopButton.addEventListener('click',(e)=>{
    clearInterval(id)
})



boxes.forEach(function (button) {
    button.addEventListener('click', function(e){
        body.style.backgroundColor = button.id
    })

})

