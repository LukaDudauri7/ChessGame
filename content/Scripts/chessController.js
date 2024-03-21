var chessBoard = new Board(9, 9);
var activeElement;
var testElement;

function showPieces() {
    function addPieceImage(row, col, id) {
        var img = document.createElement('img');
        img.src = chessBoard.board[row][col].figureImage;
        document.getElementById(id).appendChild(img);
    }
    addPieceImage(1, 1, "a1");
    addPieceImage(1, 8, "h1");
    addPieceImage(8, 1, "a8");
    addPieceImage(8, 8, "h8");
    addPieceImage(1, 2, "b1");
    addPieceImage(1, 7, "g1");
    addPieceImage(8, 2, "b8");
    addPieceImage(8, 7, "g8");
    addPieceImage(1, 3, "c1");
    addPieceImage(1, 6, "f1");
    addPieceImage(8, 3, "c8");
    addPieceImage(8, 6, "f8");
    addPieceImage(1, 5, "e1");
    addPieceImage(1, 4, "d1");
    addPieceImage(8, 4, "d8");
    addPieceImage(8, 5, "e8");

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
let moved = false;
$(document).ready(function() {
    $("td").click(function() {
        x = this.id.substring(1);
        y = this.id.charCodeAt(0) - 96;
        resetColor();
        if (moveDone == true) {
            prevX = x;
            prevY = y;
            prev = chessBoard.board[x][y];
            prevId = this.id;
            if (chessBoard.board[x][y] == null) return;
            var lightId = chessBoard.board[x][y].check();
            for (var newId = 0; newId < lightId.length; newId++) {
                var number = parseInt(lightId[newId][1]);
                var pieceId = String.fromCharCode(number + 96) + lightId[newId][0];
                document.getElementById(pieceId).style.backgroundColor = "#00a3cc";
            }
            moveDone = false;
        } else {
            if (chessBoard.board[prevX][prevY] == null) return;
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
            else{
                moved = true;
                console.log('moved');
            }
            var pieceId = String.fromCharCode(parseInt(y) + 96) + x;
            prev.row = parseInt(x);
            prev.column = parseInt(y);
            chessBoard.board[prevX][prevY] = null;
            chessBoard.board[x][y] = prev;
            activeElement = document.getElementById(prevId).lastChild
            document.getElementById(prevId).firstChild.remove();
            if (document.getElementById(pieceId).firstChild != null)  document.getElementById(pieceId).firstChild.remove();
            document.getElementById(this.id).append(activeElement);
            prev = null;
            moveDone = true;
        }
    });
    $('#black-button').on( "click", function() {
        $('.game-content').css('display', 'flex');
        $('.container').css('display', 'none');

        // $('td img').each(function() {
        //     var src = $(this).attr('src');
        //     if (src && src.includes('white')) {
        //       $(this).closest('td').addClass('disabled');
        //     }
        // });
    });
    $('#white-button').on( "click", function() {
        $('.game-content').css('display', 'flex');
        $('.container').css('display', 'none');

        // $('td img').each(function() {
        //     var src = $(this).attr('src');
        //     if (src && src.includes('black')) {
        //       $(this).closest('td').addClass('disabled');
        //     }
        // });
    });
});