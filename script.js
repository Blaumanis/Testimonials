const buttons = document.querySelectorAll('.buttons')
const image = document.querySelector('.image')
const text = document.querySelector('.text')
const name = document.querySelector('.name')

let activeImage = 0;
let activeText = 0;
let activeName = 0;

const imgArray = [
    "amy",
    "tyrell",
    "wanda",
    "john",
    "sandy",
];

const textArray = [
    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
    "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis neque reprehenderit laborum, corporis explicabo assumenda. Porro impedit consectetur animi, reprehenderit recusandae sapiente at aliquam reiciendis modi ipsam rerum suscipit distinctio?",
    "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock",
]

const nameArray = [
    "amy",
    "tyrell",
    "wanda",
    "john",
    "sandy",
]

buttons.forEach(button =>  {
    button.addEventListener('click', () => {
    if(button.classList.contains('left')){
        activeImage--;
        activeText--;
        activeName--;
        if(activeImage < 0 && activeText < 0 && activeName < 0){
            activeImage = imgArray.length - 1;
            activeText = textArray.length - 1;
            activeName = nameArray.length - 1;
        }
        image.src = `./images/${imgArray[activeImage]}.jpg`
        text.innerHTML = textArray[activeText];
        name.innerHTML = nameArray[activeName];

    }
    if(button.classList.contains('right')){
        activeImage++;
        activeText++;
        activeName++;
        if(activeImage > imgArray.length - 1 && activeText > textArray.length - 1 && activeName > nameArray.length - 1){
            activeImage =0;
            activeText = 0;
            activeName = 0;
        }
        image.src = `./images/${imgArray[activeImage]}.jpg`
        text.innerHTML = textArray[activeText];
        name.innerHTML = nameArray[activeName];
    }
    })
})

