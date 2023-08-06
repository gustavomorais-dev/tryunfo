import React from 'react';
import PropTypes from 'prop-types';

class Attr3Input extends React.Component {
  render() {
    const { value, onChange, name } = this.props;
    return (
      <label>
        Defesa
        <input
          name={ name }
          data-testid="attr3-input"
          type="number"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Attr3Input.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Attr3Input;
