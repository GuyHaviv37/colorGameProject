var colors ;
var winningColor;
var NUM_OF_SQUARES = 6;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var resetBtn = document.getElementById("reset");
var easyBtn = document.querySelector("#easyMode");
var hardBtn = document.querySelector("#hardMode");
var h1 = document.querySelector("h1");
var bottomRow = document.querySelectorAll(".bottom_row");
//Initial reset of the game
resetGame(NUM_OF_SQUARES);

//Event Listeners
easyBtn.addEventListener("click",function(){
    NUM_OF_SQUARES = 3;
    easyBtn.classList.add("active");
    hardBtn.classList.remove("active");
    resetGame(NUM_OF_SQUARES)
});
hardBtn.addEventListener("click",function(){
    NUM_OF_SQUARES = 6;
    hardBtn.classList.add("active");
    easyBtn.classList.remove("active");
    resetGame(NUM_OF_SQUARES)
});
resetBtn.addEventListener("click",function(){
    resetGame(NUM_OF_SQUARES);
});
for(var i=0;i<squares.length;i++){
    //Adding eventListeners for guessing
    squares[i].addEventListener("click",function(){
        var output = document.getElementById("output");
        if(this.style.backgroundColor === winningColor){
            output.textContent = "Correct!";
            changeAllSquares(winningColor,NUM_OF_SQUARES);
            h1.style.backgroundColor = winningColor;
            resetBtn.textContent = "PLAY AGAIN?";
        }
        else{
            this.style.backgroundColor = "#232323";
            output.textContent = "Try Again!"
        }
    });
}
//Helping functions

// Initialize game:
// Random @num new colors
// Update squares accordinly
// Select a random winner color
// Update on display
function resetGame(num){
    h1.style.backgroundColor = "steelblue";
    resetBtn.textContent = "NEW COLORS";
    output.textContent = "";
    //init colors with num colors
    colors = initColors(num);
    initSquares(num);
    //pick winning color
    winningColor = colors[randPick()];
    console.log(winningColor);
    initBottomRow(num);
    colorDisplay.textContent = winningColor;
}

function initBottomRow(num){
    if(num===3){
        //hide bottom row
        for(let i=0;i<bottomRow.length;i++){
            bottomRow[i].style.display = "none";
        }
    }else{
        for(let i=0;i<bottomRow.length;i++){
            bottomRow[i].style.display = "initial";
        }
    }
}

// Randomize @len new colors
function initColors(len){
    var colors = [];
    for(let i=0;i<len;i++){
        colors[i]=randColor();
    }
    return colors;
}

// Initialize squares to show colors
function initSquares(len){
    for(let i=0;i<len;i++){
        squares[i].style.backgroundColor = colors[i];
    }
}

// Change all squares to color @color
function changeAllSquares(color,len){
    for(let i=0;i<len;i++){
        squares[i].style.backgroundColor = color;
    }
}

// Pick a random index in squares array
function randPick(){
    return Math.floor(Math.random() * colors.length);
}
// Pick a random color
function randColor(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

