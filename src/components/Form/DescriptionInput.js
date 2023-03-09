import React from 'react';
import PropTypes from 'prop-types';

class DescriptionInput extends React.Component {
  render() {
    const { value, onChange, name } = this.props;
    return (
      <label>
        Descrição
        <input
          name={ name }
          data-testid="description-input"
          type="textarea"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

DescriptionInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default DescriptionInput;
