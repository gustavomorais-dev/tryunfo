import React from 'react';

class TrunfoInput extends React.Component {
  render() {
    return (
      <label>
        Super Trybe Trunfo
        <input
          data-testid="trunfo-input"
          type="checkbox"
        />
      </label>
    );
  }
}

export default TrunfoInput;
