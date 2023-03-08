import React from 'react';
import PropTypes from 'prop-types';
// import './Form.css';
import Attr1Input from './Form/Attr1Input';
import Attr2Input from './Form/Attr2Input';
import Attr3Input from './Form/Attr3Input';
import DescriptionInput from './Form/DescriptionInput';
import NameInput from './Form/NameInput';
import ImageInput from './Form/ImageInput';
import RareInput from './Form/RareInput';
import TrunfoInput from './Form/TrunfoInput';
import SaveButton from './Form/SaveButton';

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick } = this.props;

    return (
      <div className="container">
        <h1>ADICIONE NOVA CARTA</h1>
        <form>
          <NameInput value={ cardName } onChange={ onInputChange } />
          <DescriptionInput value={ cardDescription } onChange={ onInputChange } />
          <Attr1Input value={ cardAttr1 } onChange={ onInputChange } />
          <Attr2Input value={ cardAttr2 } onChange={ onInputChange } />
          <Attr3Input value={ cardAttr3 } onChange={ onInputChange } />
          <ImageInput value={ cardImage } onChange={ onInputChange } />
          <RareInput value={ cardRare } onChange={ onInputChange } />
          <TrunfoInput checked={ cardTrunfo } onChange={ onInputChange } />
          <SaveButton disabled={ isSaveButtonDisabled } onClick={ onSaveButtonClick } />
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
