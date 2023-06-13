import './Memory.css'
import {useState, useEffect} from 'react'
import SingleCard from './SingleCard';
import { Link } from "react-router-dom";

import cutieImage from './img/cutie.jpg';
import cutie2Image from './img/cutie2.jpg';
import cutie3Image from './img/cutie3.jpg';
import frogImage from './img/frog.jpg';
import helloImage from './img/hello.jpg';
import quackImage from './img/quack.jpg';

const cardImages = [
  { src: cutieImage, matched: false },
  { src: cutie2Image, matched: false },
  { src: cutie3Image, matched: false },
  { src: frogImage, matched: false },
  { src: helloImage, matched: false },
  { src: quackImage, matched: false },
];

function Memory() {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)
  const [disabled, setDisabled] = useState(false)

  //shuffle the cards, duplicate each image for matching
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      //add id property to track specific image
      .map((card) => ({...card, id: Math.random()}))

    setChoiceOne(null)
    setChoiceTwo(null)
    setCards(shuffledCards)
    setTurns(0)
  }

  //handle a choice
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

  useEffect(() => {
    
    if (choiceOne && choiceTwo) {
      setDisabled(true)
        if (choiceOne.src === choiceTwo.src) {
          setCards(prevCards => {
            return prevCards.map(card => {
              if (card.src === choiceOne.src) {
                return {...card, matched: true}
                } else {
                  return card
            }
          })
        })
        resetTurn()
      } else {
        
        setTimeout(() => resetTurn(), 1000)
      }
    }
  }, [choiceOne, choiceTwo])

  
  
  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns + 1)
    setDisabled(false)
  }

  useEffect(() => {
    shuffleCards()
  }, [])

  return (
    <div className="return">
       <Link to="/" className="btn-voltar">
        Voltar
      </Link>

    <div className="container">
      <div className='card-grid'>
        {cards.map(card =>(
          <SingleCard
           key={card.id}
           card={card}
           handleChoice={handleChoice}
           flipped={card === choiceOne || card === choiceTwo || card.matched}
           disabled={disabled}
           />
        ))}
      </div>
      <p>Turns: {turns}</p>
      <button className="button-memory" onClick={shuffleCards}>New Game</button>
      <h1>Memory Game</h1>

    </div>
    </div>
  );
}

export default Memory;