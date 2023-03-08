import React from 'react';

class ImageInput extends React.Component {
  render() {
    return (
      <label>
        Imagem
        <input
          data-testid="image-input"
          type="text"
        />
      </label>
    );
  }
}

export default ImageInput;
