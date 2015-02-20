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
      <div className="empty-square col-xs-1" onClick={this.handleClick}>{this.props.children.toString()}</div>
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
  handleEmptySquareClick: function(square) {
    console.log(square);
    this.setState({selectedSquare: square.key});
  },
  getInitialState: function() {
    return {
      selectedSquare: '11-3'
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
          board.push(<MazeEmptySquare key={key} squareKey={key} onEmptySquareClick={this.handleEmptySquareClick}>{content}</MazeEmptySquare>);
        }
      }
    }

    return (
      <div className="row">
        {board}
      </div>
    );
  }
});

React.render(<MazeBoard />, document.getElementById('content'));
