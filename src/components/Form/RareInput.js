import React from 'react';
import PropTypes from 'prop-types';

class RareInput extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label>
        Raridade
        <select
          data-testid="rare-input"
          value={ value }
          onChange={ onChange }
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

RareInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default RareInput;
