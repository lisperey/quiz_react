import { useContext } from 'react';
import { QuizContext } from '../context/quiz';

import React from "react";

const Questions = () => {
    const [quizState, dispatch]= useContext(QuizContext);
    const currentQuestion = quizState.questions[quizState.currentQuestion].question;
    const options = quizState.questions[quizState.currentQuestion].options;
    return(
        <div id="question">
            <p>Pergunta {quizState.currentQuestion} de {quizState.questions.length}</p>
            <h2>{currentQuestion}</h2>
            <div id="options-container">
                {options.map((r)=> <p>{r}</p>)}
            </div>
            <button>Continuar</button>
        </div>
    )
}

export default Questions;