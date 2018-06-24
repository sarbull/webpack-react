import './index.less';
import React from 'react';
import { render } from 'react-dom';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }

  tick() {
    this.setState(prevState => ({
      seconds: prevState.seconds + 1
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-6 offset-md-3">
          Seconds: {this.state.seconds} <hr />
        </div>
      </div>
    );
  }
}

render(
  <Timer />,
  document.getElementById('root')
);
