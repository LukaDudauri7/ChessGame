var chessBoard = new Board(9, 9);
var activeElement;
var testElement;

function showPieces() {
    var img;
    img = document.createElement('img');
    img.src = chessBoard.board[1][1].figureImage;
    document.getElementById("a1").appendChild(img);

    img = document.createElement('img');
    img.src = chessBoard.board[1][8].figureImage;
    document.getElementById("h1").appendChild(img);

    img = document.createElement('img');
    img.src = chessBoard.board[8][1].figureImage;
    document.getElementById("a8").appendChild(img);

    img = document.createElement('img');
    img.src = chessBoard.board[8][8].figureImage;
    document.getElementById("h8").appendChild(img);

    img = document.createElement('img');
    img.src = chessBoard.board[1][2].figureImage;
    document.getElementById("b1").appendChild(img);

    img = document.createElement('img');
    img.src = chessBoard.board[1][7].figureImage;
    document.getElementById("g1").appendChild(img);

    img = document.createElement('img');
    img.src = chessBoard.board[8][2].figureImage;
    document.getElementById("b8").appendChild(img);

    img = document.createElement('img');
    img.src = chessBoard.board[8][2].figureImage;
    document.getElementById("g8").appendChild(img);

    img = document.createElement('img');
    img.src = chessBoard.board[1][3].figureImage;
    document.getElementById("c1").appendChild(img);

    img = document.createElement('img');
    img.src = chessBoard.board[1][6].figureImage;
    document.getElementById("f1").appendChild(img);

    img = document.createElement('img');
    img.src = chessBoard.board[8][3].figureImage;
    document.getElementById("c8").appendChild(img);

    img = document.createElement('img');
    img.src = chessBoard.board[8][6].figureImage;
    document.getElementById("f8").appendChild(img);

    img = document.createElement('img');
    img.src = chessBoard.board[1][5].figureImage;
    document.getElementById("e1").appendChild(img);

    img = document.createElement('img');
    img.src = chessBoard.board[1][4].figureImage;
    document.getElementById("d1").appendChild(img);

    img = document.createElement('img');
    img.src = chessBoard.board[8][4].figureImage;
    document.getElementById("d8").appendChild(img);

    img = document.createElement('img');
    img.src = chessBoard.board[8][5].figureImage;
    document.getElementById("e8").appendChild(img);

    for (var column = 1; column <= 8; column++) {
        chessBoard.board[2][column] = new Pawn(2, column, "black");
        img = document.createElement('img');
        img.src = chessBoard.board[2][column].figureImage;
        var pieceId = String.fromCharCode(column + 96) + 2;
        document.getElementById(pieceId).appendChild(img);
    }

    for (var column = 1; column <= 8; column++) {
        chessBoard.board[7][column] = new Pawn(7, column, "white");
        img = document.createElement('img');
        img.src = chessBoard.board[7][column].figureImage;
        var pieceId = String.fromCharCode(column + 96) + 7;
        document.getElementById(pieceId).appendChild(img);
    }
}

chessBoard.board[1][1] = new Rook(1, 1, "black");
chessBoard.board[1][8] = new Rook(1, 8, "black");
chessBoard.board[1][2] = new Knight(1, 2, "black");
chessBoard.board[1][7] = new Knight(1, 7, "black");
chessBoard.board[1][3] = new Bishop(1, 3, "black");
chessBoard.board[1][6] = new Bishop(1, 6, "black");
chessBoard.board[1][5] = new Queen(1, 5, "black");
chessBoard.board[1][4] = new King(1, 4, "black");

chessBoard.board[8][1] = new Rook(8, 1, "white");
chessBoard.board[8][8] = new Rook(8, 8, "white");
chessBoard.board[8][2] = new Knight(8, 2, "white");
chessBoard.board[8][7] = new Knight(8, 7, "white");
chessBoard.board[8][3] = new Bishop(8, 3, "white");
chessBoard.board[8][6] = new Bishop(8, 6, "white");
chessBoard.board[8][4] = new Queen(8, 4, "white");
chessBoard.board[8][5] = new King(8, 5, "white");

var prev = null;

var prevX;
var prevY;
var changeTurn = true;
var prevId;
var moveDone = true;
$(document).ready(function() {
    $("td").click(function() {
        var id = this.id;
        x = id.substring(1);
        y = id.charCodeAt(0) - 96;
        resetColor();
        if (moveDone == true) {
            prevX = x;
            prevY = y;
            prev = chessBoard.board[x][y];
            prevId = id;
            if (chessBoard.board[x][y] == null)
                return;
            var lightId = chessBoard.board[x][y].check();
            for (var newId = 0; newId < lightId.length; newId++) {
                var number = parseInt(lightId[newId][1]);
                var charIndex = String.fromCharCode(number + 96);
                var pieceId = charIndex + lightId[newId][0];
                document.getElementById(pieceId).style.backgroundColor = "#00a3cc";
            }
            moveDone = false;
        } else {
            if (chessBoard.board[prevX][prevY] == null)
                return;
            var lightId = chessBoard.board[prevX][prevY].check();
            var checker = 0;
            for (var newId = 0; newId < lightId.length; newId++) {
                if (lightId[newId][0] == x && lightId[newId][1] == y) {
                    checker = 1;
                    break;
                }
            }
            if (checker == 0) {
                moveDone = true;
                return;
            }
            var number = parseInt(y);
            var charIndex = String.fromCharCode(number + 96);
            var pieceId = charIndex + x;
            prev.row = parseInt(x);
            prev.column = parseInt(y);
            chessBoard.board[prevX][prevY] = null;
            chessBoard.board[x][y] = prev;
            activeElement = document.getElementById(prevId).lastChild
            document.getElementById(prevId).firstChild.remove();
            if (document.getElementById(pieceId).firstChild != null) {
                document.getElementById(pieceId).firstChild.remove();
            }
            document.getElementById(id).append(activeElement);
            prev = null;
            moveDone = true;
            // console.log(this.turn)
            // if (this.turn == "white")
            //     this.turn = "black";
            // else
            //     this.turn = "white";
            //     return;
        }
    });
});