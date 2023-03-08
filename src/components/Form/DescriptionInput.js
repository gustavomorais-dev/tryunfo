import React from 'react';

class DescriptionInput extends React.Component {
  render() {
    return (
      <label>
        Descrição
        <input
          data-testid="description-input"
          type="textarea"
        />
      </label>
    );
  }
}

export default DescriptionInput;
