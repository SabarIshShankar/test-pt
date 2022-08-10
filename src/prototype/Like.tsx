import React, { Component } from "react";
import { HeartOutlined, HeartFilled } from '@ant-design/icons'

class App extends Component {
  state = {
    disable: false,
    liked: ""
  };

  onButtonClick = () => {
    this.setState({
      disable: !this.state.disable,
      liked: this.state.disable ? <HeartOutlined/> : <HeartFilled/>
    });
    console.log(this.state.liked);
  };

  render() {
    return (
      <div className="App">
        <button
          onClick={this.onButtonClick}
          className={`test001 ${this.state.liked}`}
        >
          <HeartOutlined/>{this.state.liked}
        </button>
      </div>
    );
  }
}

export default App;
