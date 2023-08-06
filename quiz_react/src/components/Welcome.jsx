import Img_quiz from "../imgs/quiz.svg";

const Welcome = () =>{
    return (
        <div id="welcome">
            <h2>Seja bem-vindo</h2>
            <p>Clique no botão abaixo para começar</p>
            <button>Iniciar</button>
            <img src={Img_quiz} alt="Imagem de inicio quiz"></img>
        </div>
    );
};

export default Welcome;