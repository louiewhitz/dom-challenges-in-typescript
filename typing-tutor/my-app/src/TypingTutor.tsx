import React, { Component } from 'react';
import './typingtutor.css';
interface State {
  current: number;
  allSpan: NodeListOf<HTMLSpanElement> | null;
  showPopup: boolean;
}

 class TypingTutor extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      current: 0,
      allSpan: null,
      showPopup: false
    };
  }

  componentDidMount() {
    this.setState({ allSpan: document.querySelectorAll('span') });
    document.addEventListener('keydown', this.keyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.keyDown);

  }

   restartGame = () => {
     const { allSpan } = this.state;
     if (allSpan) {
       allSpan.forEach((span) => {
         span.className = '';
       });
     }
     this.setState({ current: 0, showPopup: false });
   };

   renderPopup = () => {
     const { showPopup } = this.state;
     if (!showPopup) return null;

     return (
       <div className="popup">
         <div className="popup-content">
           <h2>Congratulations!</h2>
           <p>You've completed the typing exercise.</p>
           <button onClick={this.restartGame}>Restart</button>
         </div>
       </div>
     );
   };

  keyDown = (event: KeyboardEvent) => {
    const { current, allSpan } = this.state;

    if (!allSpan || current >= allSpan.length) return;

    const pressedKey = event.key;


    if (pressedKey === allSpan[current].textContent) {
      this.setState({ current: current + 1 });
      allSpan[current].className = 'span correct';

      if (allSpan[current + 1]) {
        allSpan[current + 1].className = 'span active';
      }
    } else {
      allSpan[current].className = 'span incorrect';

      if (allSpan[current - 1] && pressedKey === allSpan[current - 1].textContent) {
        allSpan[current - 1].className = 'span correct';
        allSpan[current].className = 'span active';
        this.setState({ current: current + 1 });
      }
      if (current + 1 >= allSpan.length) {
        this.setState({ showPopup: true });
      }
    }
  };

  render() {
    return (
      <div className="container row flex-center">
        <div className="column-full">
          <div className="text-container flex-center">
            {<h1 className="input display-flex">
              <span>g</span>
              <span>r</span>
              <span>u</span>
              <span>m</span>
              <span>p</span>
              <span>y</span>
              <span> </span>
              <span>w</span>
              <span>i</span>
              <span>z</span>
              <span>a</span>
              <span>r</span>
              <span>d</span>
              <span>s</span>
              <span> </span>
              <span>m</span>
              <span>a</span>
              <span>k</span>
              <span>e</span>
              <span> </span>
              <span>t</span>
              <span>o</span>
              <span>x</span>
              <span>i</span>
              <span>c</span>
              <span> </span>
              <span>b</span>
              <span>r</span>
              <span>e</span>
              <span>w</span>
            </h1>}
            {this.renderPopup()}
          </div>
        </div>
      </div>
    );
  }
}

export default TypingTutor;
