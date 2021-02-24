/* eslint-disable prettier/prettier */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';

class List extends Component {

    render() {

        return (
            <div>
                {this.props.items.map((item) => (
                    <li key={item}>{item}</li>
                ))}
          </div>
        );

    }

}

const ListComponent = () => (
    <div>
        <List items={['here', 'here', 'here', 'here']} />
        {' '}
  </div>
);
console.log('Here')
export default ListComponent;
