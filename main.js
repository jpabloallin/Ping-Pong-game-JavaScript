(function () {
    self.Board = function (width, height) {
        this.width = width;
        this.height = height;
        this.playing = false;
        this.game_over = false;
        this.bars = [];
        this.ball = null;
        this.playing = false;
    };

    self.Board.prototype = {
        get elements() {
            var elements = this.bars.map(function (bar) {
                return bar;
            });
            elements.push(this.ball);
            return elements;
        },
    };
})();

(function () {
    self.BoardView = function (canvas, board) {
      this.canvas = canvas;
      this.canvas.width = board.width;
      this.canvas.height = board.height;
      this.board = board;
      this.cxt = canvas.getContext("2d");
    };

    self.BoardView.prototype = {
        clean: function () {
          this.cxt.clearRect(0, 0, this.board.width, this.board.height);
        },
        draw: function () {
          for (var i = this.board.elements.length - 1; i >= 0; i--) {
            var el = this.board.elements[i];
    
            draw(this.cxt, el);
          }
        },}

(function () {
    self.Bar = function (x, y, width, height, board) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.board = board;
        this.board.bars.push(this);
        this.kind = "rectangle";
        this.speed = 20;
    };
    self.Bar.prototype = {
        down: function () {
        },
        up: function () {
        },
        
      };
})();


var board = new Board(800, 400);
var bar = new Bar(20, 150, 40, 100, board);
var bar_2 = new Bar(740, 150, 40, 100, board);
var canvas = document.getElementById("canvas");
var board_view = new BoardView(canvas, board);
var ball = new Ball(400, 200, 10, board);