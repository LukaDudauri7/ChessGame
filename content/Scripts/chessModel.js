class Figure {
    constructor(row, column, color) {
        this.row = row;
        this.column = column;
        this.color = color;
    }

    positionFree(chessBoard, row, column) {
        var board = chessBoard.board;
        if (chessBoard.checkBounds(row, column)) {
            if (board[row][column] == null)
                return 1;
            else if (board[row][column].color != this.color) {
                return 2;
            } else
                return 0;
        }
        return 0;
    }

    checkBoardRows() {
        var rowPosition = [];
        for (var newRow = this.row - 1; newRow > 0; newRow--) {
            var colorFlag = this.positionFree(chessBoard, newRow, this.column);
            if (colorFlag == 1)
                rowPosition.push([newRow, this.column]);
            else if (colorFlag == 2) {
                rowPosition.push([newRow, this.column]);
                break;
            } else
                break;
        }

        for (var newRow = this.row + 1; newRow <= 8; newRow++) {
            var colorFlag = this.positionFree(chessBoard, newRow, this.column);
            if (colorFlag == 1)
                rowPosition.push([newRow, this.column]);
            else if (colorFlag == 2) {
                rowPosition.push([newRow, this.column]);
                break;
            } else
                break;
        }
        return rowPosition;
    }

    checkBoardColumns() {
        var columnPosition = [];
        for (var newColumn = this.column - 1; newColumn >= 1; newColumn--) {
            var colorFlag = this.positionFree(chessBoard, this.row, newColumn);
            if (colorFlag == 1)
                columnPosition.push([this.row, newColumn]);
            else if (colorFlag == 2) {
                columnPosition.push([this.row, newColumn]);
                break;
            } else
                break;
        }

        for (var newColumn = this.column + 1; newColumn <= 8; newColumn++) {
            var colorFlag = this.positionFree(chessBoard, this.row, newColumn);
            if (colorFlag == 1)
                columnPosition.push([this.row, newColumn]);
            else if (colorFlag == 2) {
                columnPosition.push([this.row, newColumn]);
                break;
            } else
                break;
        }
        return columnPosition;

    }

    checkBoardDiagonals() {
        var diagonalPosition = [];
        for (var newRow = this.row + 1, newColumn = this.column + 1; newRow <= 8, newColumn <= 8; newRow++, newColumn++) {
            var colorFlag = this.positionFree(chessBoard, newRow, newColumn);
            if (colorFlag == 1)
                diagonalPosition.push([newRow, newColumn]);
            else if (colorFlag == 2) {
                diagonalPosition.push([newRow, newColumn]);
                break;
            } else
                break;
        }

        for (var newRow = this.row - 1, newColumn = this.column + 1; newRow >= 1, newColumn <= 8; newRow--, newColumn++) {
            var colorFlag = this.positionFree(chessBoard, newRow, newColumn);
            if (colorFlag == 1)
                diagonalPosition.push([newRow, newColumn]);
            else if (colorFlag == 2) {
                diagonalPosition.push([newRow, newColumn]);
                break;
            } else
                break;
        }

        for (var newRow = this.row + 1, newColumn = this.column - 1; newRow <= 8, newColumn >= 1; newRow++, newColumn--) {
            var colorFlag = this.positionFree(chessBoard, newRow, newColumn);
            if (colorFlag == 1)
                diagonalPosition.push([newRow, newColumn]);
            else if (colorFlag == 2) {
                diagonalPosition.push([newRow, newColumn]);
                break;
            } else
                break;
        }

        for (var newRow = this.row - 1, newColumn = this.column - 1; newRow >= 1, newColumn >= 1; newRow--, newColumn--) {
            var colorFlag = this.positionFree(chessBoard, newRow, newColumn);
            if (colorFlag == 1)
                diagonalPosition.push([newRow, newColumn]);
            else if (colorFlag == 2) {
                diagonalPosition.push([newRow, newColumn]);
                break;
            } else
                break;
        }
        return diagonalPosition;
    }
}

class Pawn extends Figure {
    constructor(row, column, color) {
        super(row, column, color);
        this.figureImage = "content/Images/ChessPieces/" + color + "Pawn" + ".png";
        this.name = "Pawn";
    }
    check() {
        var possibleMoves = [];
        var newRow;

        if (this.color == "white" && this.row == 7)
            for (newRow = this.row - 1; newRow >= this.row - 2; newRow--) {
                var colorFlag = this.positionFree(chessBoard, newRow, this.column);
                if (colorFlag == 1)
                    possibleMoves.push([newRow, this.column]);
            }

        if (this.color == "black" && this.row == 2)
            for (newRow = this.row + 1; newRow <= this.row + 2; newRow++) {
                var colorFlag = this.positionFree(chessBoard, newRow, this.column);
                if (colorFlag == 1)
                    possibleMoves.push([newRow, this.column]);;
            }

        if (this.color == "white" && this.row != 7)
            for (newRow = this.row - 1; newRow > this.row - 2; newRow--) {
                var colorFlag = this.positionFree(chessBoard, newRow, this.column);
                if (colorFlag == 1)
                    possibleMoves.push([newRow, this.column]);
            }

        if (this.color == "black" && this.row != 2)
            for (newRow = this.row + 1; newRow < this.row + 2; newRow++) {
                var colorFlag = this.positionFree(chessBoard, newRow, this.column);
                if (colorFlag == 1)
                    possibleMoves.push([newRow, this.column]);
            }

        if (this.color == "black") {
            var newRow = this.row + 1;
            var newColumn = this.column + 1;
            var colorFlag = this.positionFree(chessBoard, newRow, newColumn);
            if (colorFlag == 2 && chessBoard.board[x][y] != null) {
                possibleMoves.push([newRow, newColumn]);
            }
        }

        if (this.color == "black") {
            var newRow = this.row + 1;
            var newColumn = this.column - 1;
            var colorFlag = this.positionFree(chessBoard, newRow, newColumn);
            if (colorFlag == 2 && chessBoard.board[x][y] != null) {
                possibleMoves.push([newRow, newColumn]);
            }
        }

        if (this.color == "white") {
            var newRow = this.row - 1;
            var newColumn = this.column + 1;
            var colorFlag = this.positionFree(chessBoard, newRow, newColumn);
            if (colorFlag == 2 && chessBoard.board[x][y] != null) {
                possibleMoves.push([newRow, newColumn]);
            }
        }

        if (this.color == "white") {
            var newRow = this.row - 1;
            var newColumn = this.column - 1;
            var colorFlag = this.positionFree(chessBoard, newRow, newColumn);
            if (colorFlag == 2 && chessBoard.board[x][y] != null) {
                possibleMoves.push([newRow, newColumn]);
            }
        }
        return possibleMoves;
    }
}

class Bishop extends Figure {
    constructor(row, column, color) {
        super(row, column, color);
        this.figureImage = "content/Images/ChessPieces/" + color + "Bishop" + ".png";
        this.name = "Bishop";
    }
    check() {
        var possibleMoves = this.checkBoardDiagonals();
        return possibleMoves;
    }
}


class Knight extends Figure {
    constructor(row, column, color) {
        super(row, column, color);
        this.figureImage = "content/Images/ChessPieces/" + color + "Knight" + ".png";
        this.name = "Knight";
        this.possibleDirection = [
            [2, 1],
            [1, 2],
            [2, -1],
            [1, -2],
            [-2, 1],
            [-1, 2],
            [-2, -1],
            [-1, -2]
        ];
    }
    check() {
        var possibleMoves = [];
        var newRow;
        var newColumn;
        for (var index = 0; index < this.possibleDirection.length; index++) {
            newRow = this.row + this.possibleDirection[index][0];
            newColumn = this.column + this.possibleDirection[index][1];
            var colorFlag = this.positionFree(chessBoard, newRow, newColumn);
            if (colorFlag == 1 || colorFlag == 2)
                possibleMoves.push([newRow, newColumn]);
        }
        return possibleMoves;
    }
}


class Queen extends Figure {
    constructor(row, column, color) {
        super(row, column, color);
        this.figureImage = "content/Images/ChessPieces/" + color + "Queen" + ".png";
        this.name = "Queen";
    }
    check() {
        var possiblMoves = this.checkBoardColumns().concat(this.checkBoardRows(), this.checkBoardDiagonals());
        return possiblMoves;
    }
}

class King extends Figure {
    constructor(row, column, color) {
        super(row, column, color);
        this.figureImage = "content/Images/ChessPieces/" + color + "King" + ".png";
        this.name = "King";
        this.possibleDirection = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
            [1, 1],
            [1, -1],
            [-1, 1],
            [-1, -1]
        ];
    }
    check() {
        var possibleMoves = [];
        var newRow;
        var newColumn;
        for (var index = 0; index < this.possibleDirection.length; index++) {
            newRow = this.row + this.possibleDirection[index][0];
            newColumn = this.column + this.possibleDirection[index][1];
            var colorFlag = this.positionFree(chessBoard, newRow, newColumn);
            if (colorFlag == 1 || colorFlag == 2)
                possibleMoves.push([newRow, newColumn]);
        }
        return possibleMoves;
    }
}

class Rook extends Figure {
    constructor(row, column, color) {
        super(row, column, color);
        this.figureImage = "content/Images/ChessPieces/" + color + "Rook" + ".png";
        this.name = "Rook";
    }
    check() {
        var possibleMoves = this.checkBoardRows().concat(this.checkBoardColumns());
        return possibleMoves;
    }
}

class Board {
    constructor() {
        var newBoard = [];
        this.size = 9;
        for (var rowIndex = 1; rowIndex < this.size; rowIndex++) {
            var row = [];
            for (var columnIndex = 1; columnIndex < this.size; columnIndex++) {
                row[columnIndex] = null;
            }
            newBoard[rowIndex] = row;
        }
        this.board = newBoard;
    }
    checkBounds(row, column) {
        return (row >= 1 && row < this.board.length && column >= 1 && column < this.board.length);
    }
}