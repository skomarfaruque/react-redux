import React from 'react';
export default class Foo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  render() {
    const { count } = this.state;
    return (
      <div>
        <div className={`clicks-${count}`}>
          {count} clicks
        </div>
        <a href="url" className="sohag" onClick={() => { this.setState({ count: count + 1 }); }}>
          Increment
        </a>
      </div>
    );
  }
}