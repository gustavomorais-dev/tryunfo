import React from 'react';

class Attr3Input extends React.Component {
  render() {
    return (
      <label>
        Attr03
        <input
          data-testid="attr3-input"
          type="number"
        />
      </label>
    );
  }
}

export default Attr3Input;
