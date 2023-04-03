import React from 'react';
import './App.css';
import { topicsArray } from './topics-array';

interface AppState {
  activeTopic: string | null;
}

class App extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      activeTopic: null,
    };

    this.handleClick = this.handleClick.bind(this);
    this.toggleShow = this.toggleShow.bind(this);
  }

  handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const targetTextContent = event.currentTarget.textContent;
    if (this.state.activeTopic === targetTextContent) {
      this.setState({ activeTopic: null });
    } else {
      this.setState({ activeTopic: targetTextContent });
    }
  }

  toggleShow() {
    const { activeTopic } = this.state;

    return topicsArray.map((topic) => (
      <div key={topic.title} className='container'>
        <div onClick={this.handleClick} className='headers'>
          <h2>{topic.title}</h2>
        </div>
        <div className={topic.title === activeTopic ? 'show content' : 'hide'}>
          <p>{topic.text}</p>
        </div>
      </div>
    ));
  }

  render() {
    return <div>{this.toggleShow()}</div>;
  }
}

export default App;
