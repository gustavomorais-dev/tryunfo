import React from 'react';
import PropTypes from 'prop-types';
import './Card.css'

class Card extends React.Component {
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
    } = this.props;
    return (
      <div className="container">
        <h3 data-testid="name-card">
          { cardName }
        </h3>
        <img
          data-testid="image-card"
          src={ cardImage }
          alt={ cardName }
        />
        <h5 data-testid="description-card">
          { cardDescription }
        </h5>
        <p data-testid="attr1-card">
          Poder:
          { cardAttr1 }
        </p>
        <p data-testid="attr2-card">
          Inteligência:
          { cardAttr2 }
        </p>
        <p data-testid="attr3-card">
          Defesa:
          { cardAttr3 }
        </p>
        <p data-testid="rare-card">
          { cardRare }
        </p>
        {
          (cardTrunfo) === true && (<p data-testid="trunfo-card"> Super Trunfo </p>)
        }
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
