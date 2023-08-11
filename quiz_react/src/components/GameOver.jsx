import React, { useContext } from 'react';
import { QuizContext } from '../context/quiz';

import PropTypes from 'prop-types';
import WellDone from "../imgs/welldone.svg";



import "./GameOver.css";

const GameOver = () => {
    const [quizState, dispatch]= useContext(QuizContext);
  return (
    <div id="gameover">
        <h2>
        Fim do Jogo!
        </h2>
        <p>Pontuação: {quizState.score}</p>
        <p>Você acertou {quizState.score} de {quizState.questions.length} perguntas.</p>
        <img src={WellDone} alt="Imgs Fim do Quiz"/>
        <button onClick={() => dispatch({type: "NEW_GAME"})}>Reiniciar</button>
    </div>
  )
}

GameOver.propTypes = {}

export default GameOver