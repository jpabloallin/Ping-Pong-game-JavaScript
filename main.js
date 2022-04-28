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