import { createContext, useReducer } from "react";
import questions from '../data/questions';
import { GameStages } from "../stages/game-stages";

export const QuizContext = createContext();

const initialState = {
    gameStage: GameStages[0],
    questions,
    currentQuestion: 0,
}

const quizReducer = (state, action) =>{

    console.log(state, action);

    switch (action.type) {
        case 'CHANGE_STATE':
            return {
                ...state,
                gameStage: GameStages[1],
            };
        case 'REORDER_QUESTIONS':
            // eslint-disable-next-line no-case-declarations
            const reorderedQuestions = questions.sort(()=>{
                return Math.random() - 0.5;
            });
            return {
                ...state,
                questions: reorderedQuestions,
            }
        default:
            return state;
    }
}

export const QuizProvider = ({children}) => {
    const value = useReducer(quizReducer, initialState);
    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};