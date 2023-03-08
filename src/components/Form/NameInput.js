import React from 'react';

class NameInput extends React.Component {
  render() {
    return (
      <label>
        Nome
        <input
          data-testid="name-input"
          type="text"
        />
      </label>
    );
  }
}

export default NameInput;
