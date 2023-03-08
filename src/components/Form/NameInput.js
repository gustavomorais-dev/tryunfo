import React from 'react';
import PropTypes from 'prop-types';

class NameInput extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label>
        Nome
        <input
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
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default NameInput;
