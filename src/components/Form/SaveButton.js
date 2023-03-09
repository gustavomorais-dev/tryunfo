import React from 'react';
import PropTypes from 'prop-types';

class SaveButton extends React.Component {
  render() {
    const { disabled, onClick, name } = this.props;
    return (
      <div>
        <button
          name={ name }
          data-testid="save-button"
          disabled={ disabled }
          onClick={ onClick }
        >
          Salvar
        </button>
      </div>
    );
  }
}

SaveButton.propTypes = {
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SaveButton;
