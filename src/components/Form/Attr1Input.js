import React from 'react';
import PropTypes from 'prop-types';

class Attr1Input extends React.Component {
  render() {
    const { value, onChange, name } = this.props;
    return (
      <label>
        Attr01
        <input
          name={ name }
          data-testid="attr1-input"
          type="number"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Attr1Input.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Attr1Input;
