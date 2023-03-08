import React from 'react';

class Attr2Input extends React.Component {
  render() {
    return (
      <label>
        Attr02
        <input
          data-testid="attr2-input"
          type="number"
        />
      </label>
    );
  }
}

export default Attr2Input;
