var board = document.createElement("board");
var figurePosition = [];
var cellId;
for (var row = 1; row <= 8; row++) {
    var createTr = document.createElement('tr');
    for (var column = 97; column <= 104; column++) {
        var createTd = document.createElement('td');
        cellId = String.fromCharCode(column) + row;
        createTd.id = cellId;
        if (row % 2 == column % 2) createTd.className = "white";
        else  createTd.className = "black";
        createTr.appendChild(createTd);
        figurePosition.push(cellId);
    }
    board.appendChild(createTr);
    // var borderTh = document.createElement('th');
    // borderTh.innerHTML = row;
    // console.log(borderTh);
    // createTr.appendChild(borderTh);
    // board.appendChild(createTr);
}

var parentNumbersDiv = document.createElement("div");
parentNumbersDiv.className = "parentDiv"
for(let i = 1; i <= 8; i++){
    var div = document.createElement("div");
    div.textContent = i;
    div.className = 'div_bg'
    parentNumbersDiv.appendChild(div)
}

// document.body.appendChild(parentNumbersDiv)
// document.body.appendChild(board);

document.querySelector(".game-content").appendChild(parentNumbersDiv);
document.querySelector(".game-content").appendChild(board);


for (var column = 97; column <= 104; column++) {
    var newTr = document.createElement('th');
    newTr.innerHTML = String.fromCharCode(column);
    board.append(newTr);
}
showPieces();

function resetColor() {
    var black = document.getElementsByClassName("black");
    for (var i = 0; i < black.length; i++) {
        black[i].style.backgroundColor = "#1d4c79";
    }
    var white = document.getElementsByClassName("white");
    for (var i = 0; i < white.length; i++) {
        white[i].style.backgroundColor = "#eae9d2";
    }
}

// let tdElement = document.querySelectorAll('td');
// Iterate through each <td> element and attach event listener
// tdElement.forEach(td => {
//     td.addEventListener("click", function() {
//         let imageSrc = td.innerHTML;
//         if(imageSrc.includes('white')) console.log("white");
//         else console.log('black');
//     });
// });