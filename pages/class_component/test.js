import React, { Component } from 'react';

class List extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 15,
    };
  }

  increment() {
    this.state.count = this.state.count + 1;
    console.log(this.state.count);
  }

  render() {
    return (
      <>
        <ul>
          {this.props.items.map((item) => (
            <li key={item}>
              {item}
              {' ...hey so the count is... = '}

              {this.state.count}
            </li>
          ))}
        </ul>
        <div align="center">
          <button onClick={() => this.increment()}>Increment!</button>
        </div>
      </>
    );
  }
}

const ListContainer = () => (
  <List items={['motherfuckeriam here', 'and now im here', 'hey']} />
);
export default ListContainer;
