var MAZE = [[0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1],
            [1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1],
            [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1],
            [1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
            [1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
            [1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1]];

var MazeEmptySquare = React.createClass({
  render: function() {
    return (
      <div className="empty-square col-xs-1"></div>
    );
  }
});

var MazeFullSquare = React.createClass({
  render: function() {
    return (
      <div className="full-square col-xs-1"></div>
    );
  }
});

var MazeBoard = React.createClass({
  getInitialState: function() {
    return {
      startingPosition: '11-3'
    };
  },
  render: function() {

    var board = [];

    for (var i = 0; i < MAZE.length; i++) {
      for (var j = 0; j < MAZE[i].length; j++) {
        if (MAZE[i][j]) {
          board.push(<MazeFullSquare />);
        } else {
          board.push(<MazeEmptySquare key={i + "-" + j} />);
        }
      };
    };

    return (
      <div className="row">{board}
      </div>
    );
  }
});

React.render(<MazeBoard />, document.getElementById('content'));
