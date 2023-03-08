import React from 'react';
import PropTypes from 'prop-types';

class SaveButton extends React.Component {
  render() {
    const { disabled, onClick } = this.props;
    return (
      <div>
        <button
          data-testid="save-button"
          type="checkbox"
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
  disabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SaveButton;
