import React from 'react';

interface HotBtnProps {
  className: string;
}

interface HotBtnState {
  clicks: number;
}

class HotBtn extends React.Component<HotBtnProps, HotBtnState> {
  constructor(props: HotBtnProps) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { clicks: 0 };
  }

  handleClick() {
    const updateCount = this.state.clicks + 1;
    this.setState({ clicks: updateCount });
  }

  render() {
    let btnClass = 'btn-blue';

    if (this.state.clicks >= 3 && this.state.clicks < 6) {
      btnClass = 'btn-purple';
    } else if (this.state.clicks >= 6 && this.state.clicks < 12) {
      btnClass = 'btn-pink';
    } else if (this.state.clicks >= 12 && this.state.clicks < 15) {
      btnClass = 'btn-orange';
    } else if (this.state.clicks >= 15 && this.state.clicks < 18) {
      btnClass = 'btn-yellow';
    } else if (this.state.clicks >= 18 && this.state.clicks < 21) {
      btnClass = 'btn-white';
    }
    return (
      <button className={btnClass} onClick={this.handleClick}>
        Hot Button
      </button>
    );
  }
}

export default HotBtn;
