import React from 'react';
import PropTypes from 'prop-types';

class TrunfoInput extends React.Component {
  render() {
    const { checked, onChange, name } = this.props;
    return (
      <label>
        Super Trybe Trunfo
        <input
          name={ name }
          data-testid="trunfo-input"
          type="checkbox"
          checked={ checked }
          onChange={ onChange }
        />
      </label>
    );
  }
}

TrunfoInput.propTypes = {
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TrunfoInput;
