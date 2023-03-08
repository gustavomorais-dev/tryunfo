import React from 'react';

class SaveButton extends React.Component {
  render() {
    return (
      <div>
        <button
          data-testid="save-button"
          type="checkbox"
        >
          Salvar
        </button>
      </div>
    );
  }
}

export default SaveButton;
