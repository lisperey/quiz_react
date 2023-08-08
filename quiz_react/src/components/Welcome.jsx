import { useContext } from 'react';
import { QuizContext } from '../context/quiz';

import './Welcome.css';
import Img_quiz from "../imgs/quiz.svg";


const Welcome = () =>{
    const [quizState, dispatch]= useContext(QuizContext);
    
    return (
        <div id="welcome">
            <h2>Seja bem-vindo</h2>
            <p>Clique no botão abaixo para começar</p>
            <button onClick={()=> dispatch({type: 'CHANGE_STATE'})}>Iniciar</button>
            <img src={Img_quiz} alt="Imagem de inicio quiz"></img>
        </div>
    );
};

export default Welcome;