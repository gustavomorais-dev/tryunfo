import React from 'react';
import PropTypes from 'prop-types';

class Attr2Input extends React.Component {
  render() {
    const { value, onChange, name } = this.props;
    return (
      <label>
        Inteligência
        <input
          name={ name }
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
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Attr2Input;
