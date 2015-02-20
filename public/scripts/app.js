var MAZE = [[0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1],
            [1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1],
            [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1],
            [1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
            [1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1]];

var MazeEmptySquare = React.createClass({
  handleClick: function() {
    this.props.onEmptySquareClick({key: this.props.squareKey});
  },
  render: function() {
    return (
      <div className={'square empty-square col-xs-1 ' + this.props.className} onClick={this.handleClick}>{this.props.children.toString()}</div>
    );
  }
});

var MazeFullSquare = React.createClass({
  render: function() {
    return (
      <div className="square full-square col-xs-1"></div>
    );
  }
});

var MazeBoard = React.createClass({
  handleEmptySquareClick: function(square) {
    this.setState({goalLocation: square.key});
  },
  getInitialState: function() {
    return {
      selectedSquare: '11-3',
      goalLocation: null
    };
  },
  render: function() {
    var board = [];

    for (var i = 0; i < MAZE.length; i++) {
      for (var j = 0; j < MAZE[i].length; j++) {
        var key = i + "-" + j;
        if (MAZE[i][j]) {
          board.push(<MazeFullSquare key={key} />);
        } else {
          var content = this.state.selectedSquare == key ? '⚫' : '';
          var className = this.state.goalLocation == key ? 'goal' : '';

          board.push(<MazeEmptySquare key={key} squareKey={key} onEmptySquareClick={this.handleEmptySquareClick} className={className}>{content}</MazeEmptySquare>);
        }
      }
    }

    return (
      <div id="board">
        {board}
      </div>
    );
  }
});

React.render(<MazeBoard />, document.getElementById('content'));
