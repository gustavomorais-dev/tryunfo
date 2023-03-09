import React from 'react';
import PropTypes from 'prop-types';

class NameInput extends React.Component {
  render() {
    const { value, onChange, name } = this.props;
    return (
      <label>
        Nome
        <input
          name={ name }
          data-testid="name-input"
          type="text"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

NameInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default NameInput;
