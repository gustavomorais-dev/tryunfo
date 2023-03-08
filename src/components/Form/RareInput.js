import React from 'react';

class RareInput extends React.Component {
  render() {
    return (
      <label>
        Raridade
        <select
          data-testid="rare-input"
        >
          <option
            value="normal"
          >
            Normal
          </option>
          <option
            value="raro"
          >
            Raro
          </option>
          <option
            value="muito raro"
          >
            Muito Raro
          </option>
        </select>
      </label>
    );
  }
}

export default RareInput;
