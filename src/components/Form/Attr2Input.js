import React from 'react';
import PropTypes from 'prop-types';

class Attr2Input extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label>
        Attr02
        <input
          data-testid="attr2-input"
          type="number"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Attr2Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Attr2Input;
