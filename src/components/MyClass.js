import React, { Component } from 'react';

class MyClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player1: 0,
      player2: 0,
      tip: '',
    }
  }

  getPoint = (player) => {
    const { tip } = this.state;
    if (tip === 'Win') return;
    this.setState(preState => ({
      [player]: preState[player] + 15,
    }), this.check);
  }

  check = () => {
    const { player1, player2 } = this.state;
    if (player1 >= 60 || player2 >= 60) {
      if (Math.abs(player1 - player2) === 15) {
        this.setState({
          tip: 'Point',
        });
      } else if (Math.abs(player1 - player2) > 15) {
        this.setState({
          tip: 'Win',
        });
      } else {
        this.setState({
          tip: '',
        });
      }
    } else if ((player1 === 45 || player2 === 45) && Math.abs(player1 - player2) >= 15) {
      this.setState({
        tip: 'Point',
      });
    } else {
      this.setState({
        tip: '',
      });
    }
  }

  render() {
    const { player1, player2, tip } = this.state;

    return (
      <div>
        <div onClick={() => this.getPoint('player1')}>player1: {player1} {player1 > player2 && tip}</div>
        <hr/>
        <div onClick={() => this.getPoint('player2')}>player2: {player2} {player2 > player1 && tip}</div>
        <button onClick={() => this.setState({player1: 0, player2: 0, tip: ''})}>reset</button>
      </div>
    )
  }
}

export default MyClass;
