import React from 'react';
import Card from './components/Card';
import Form from './components/Form';
import './Style.css';

class App extends React.Component {
  constructor() {
    super();

    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      deck: [],
    };
  }

  componentDidMount() {
    this.setState(
      {
        cardImage: 'https://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/8e4c9b50b45b339.png',
      }
    );
  }

  onSaveButtonClick() {
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
      deck,
    } = this.state;
    const tempState = [...deck];
    const newCard = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };
    tempState.push(newCard);
    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: 'https://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/8e4c9b50b45b339.png',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      deck: tempState,
      hasTrunfo: cardTrunfo ? true : hasTrunfo,
    });
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState(
      {
        [name]: value,
      },
      this.saveButtonVisibilityCheck,
    );
  }

  saveButtonVisibilityCheck() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;
    const maxAttr = 90;
    const maxTotalAttr = 210;
    let invalid = false;
    const parsedAttr1 = parseInt(cardAttr1, 10);
    const parsedAttr2 = parseInt(cardAttr2, 10);
    const parsedAttr3 = parseInt(cardAttr3, 10);
    if (!cardName) invalid = true;
    if (!cardDescription) invalid = true;
    if (!cardImage) invalid = true;
    if (!cardRare) invalid = true;
    if (parsedAttr1 > maxAttr || parsedAttr1 < 0) invalid = true;
    if (parsedAttr2 > maxAttr || parsedAttr2 < 0) invalid = true;
    if (parsedAttr3 > maxAttr || parsedAttr3 < 0) invalid = true;
    if (parsedAttr1 + parsedAttr2 + parsedAttr3 > maxTotalAttr) invalid = true;
    this.setState({ isSaveButtonDisabled: invalid });
  }

  deleteCard(index) {
    const { deck } = this.state;
    const cardToBeDeleted = deck[index];
    if (cardToBeDeleted.cardTrunfo) {
      this.setState({ hasTrunfo: false });
    }
    const tempState = deck.filter((card, id) => index !== id);
    this.setState({ deck: tempState });
  }

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
      deck,
    } = this.state;
    return (
      <body>
        <div className='container-1'>
          <div>
            <Form
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardImage={ cardImage }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
              hasTrunfo={ hasTrunfo }
              isSaveButtonDisabled={ isSaveButtonDisabled }
              onInputChange={ this.onInputChange }
              onSaveButtonClick={ this.onSaveButtonClick }
            />
          </div>
          <div>
            <Card
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardImage={ cardImage }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
            />
          </div>
        </div>
        <div className='container-2'>
          { deck.length > 0 && (
            <ul>
              {
                deck.map((card, index) => (
                  <li key={ index }>
                    <Card { ...card } />
                    <button
                      data-testid="delete-button"
                      onClick={ () => this.deleteCard(index) }
                      className='delete-button'
                    >
                      Excluir
                    </button>
                  </li>
                ))
              }
            </ul>
          )}
        </div>
      </body>
    );
  }
}

export default App;
