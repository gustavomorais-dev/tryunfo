import React from 'react';
import PropTypes from 'prop-types';

class Attr3Input extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label>
        Attr03
        <input
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
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Attr3Input;
