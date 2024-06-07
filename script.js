var startBtn = document.querySelector("#screen1 button")
var screens = document.querySelectorAll(".screen")
var allElems = document.querySelectorAll(".elem")
var playground = document.querySelector(".playground")
var scoreDiv = document.querySelector(".score span")
var timeDiv = document.querySelector(".time span")



var message = document.querySelector("#screen3 h5")
var selectedImage = "";
var score = 0;
var min = 0;
var sec = 0;


startBtn.addEventListener("click", function(){
    screens[1].style.transform = "translateY(-100%)";
    
})

allElems.forEach(function(elem){
    elem.addEventListener("click", function(){

        selectedImage = elem.childNodes[3].src
        console.log(selectedImage)

        screens[2].style.transform = "translateY(-200%)";
        createImage();
        timeBadhao();
    })
});

function createImage(image){
    var newImg = document.createElement("img")
    newImg.setAttribute("src", selectedImage)
    const {h,w,rote} = getRandomLocation()
    newImg.style.left = w+"px"
    newImg.style.top = h+"px"
    newImg.style.rotate = rote + "deg"

    newImg.addEventListener("click", catchImage)
    playground.appendChild(newImg)
}
function catchImage(){
    increaseScore()
    this.style.pointerEvents = "none"; 
    this.style.opacity = 0
    const img = this;
    
    setTimeout(function(){
        this.style.opacity = 1;
        img.remove();
    }, 2000)
    addImages()
}

function getRandomLocation(){
    const h = Math.random() *(window.innerHeight -200) + 100
    const w = Math.random() *(window.innerWidth -200)  +100
    const rote = Math.floor(Math.random()*360)
    
    return {h,w,rote}
}


function increaseScore(){
    score++;
    scoreDiv.innerHTML = score;
    if(score > 19){
        message.style.display = "block";
    }
};

function addImages(){
    setTimeout(createImage, 1000)
    setTimeout(createImage, 1500)
}

function timeBadhao(){
    setInterval(function(){
        sec++;
        if (sec >= 60) {
            min++;
            sec = 0;
        }
        timeDiv.innerHTML = `${min} : ${sec < 10 ? '0' + sec : sec}`;
    }, 1000);
}



