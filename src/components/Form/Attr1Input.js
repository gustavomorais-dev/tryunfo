import React from 'react';

class Attr1Input extends React.Component {
  render() {
    return (
      <label>
        Attr01
        <input
          data-testid="attr1-input"
          type="number"
        />
      </label>
    );
  }
}

export default Attr1Input;
