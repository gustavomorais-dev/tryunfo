import React from 'react';
import PropTypes from 'prop-types';

class TrunfoInput extends React.Component {
  render() {
    const { checked, onChange } = this.props;
    return (
      <label>
        Super Trybe Trunfo
        <input
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
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TrunfoInput;
