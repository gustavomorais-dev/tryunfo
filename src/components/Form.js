import React from 'react';
import './Form.css';
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
    return (
      <div className="container">
        <h1>ADICIONE NOVA CARTA</h1>
        <form>
          <NameInput />
          <DescriptionInput />
          <Attr1Input />
          <Attr2Input />
          <Attr3Input />
          <ImageInput />
          <RareInput />
          <TrunfoInput />
          <SaveButton />
        </form>
      </div>
    );
  }
}

export default Form;
