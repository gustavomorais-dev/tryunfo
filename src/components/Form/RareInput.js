import React from 'react';
import PropTypes from 'prop-types';

class RareInput extends React.Component {
  render() {
    const { value, onChange, name } = this.props;
    return (
      <label>
        Raridade
        <select
          name={ name }
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
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default RareInput;
