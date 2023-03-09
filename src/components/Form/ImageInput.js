import React from 'react';
import PropTypes from 'prop-types';

class ImageInput extends React.Component {
  render() {
    const { value, onChange, name } = this.props;
    return (
      <label>
        Imagem
        <input
          name={ name }
          data-testid="image-input"
          type="text"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

ImageInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ImageInput;
