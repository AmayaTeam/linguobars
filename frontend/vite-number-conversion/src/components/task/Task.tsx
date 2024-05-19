import "./Task.css"
import {Link} from "react-router-dom";
import {useState} from "react";
// import Landing from "../../pages/Landing/Landing.tsx";

const Task: React.FC = () => {
    const [showPopup, setShowPopup] = useState(false); // Состояние для отображения всплывающего окна

    const handleButtonClick = () => {
        if (showPopup) {
            setShowPopup(false);
        } else {
            setShowPopup(true);
        }
    };
    return (
        <div className="task-container">

            < div className="tack-content-container">
                <div className="question">
                    <div>
                        <p>Выберите правильный </p>
                        <p>перевод слова </p>
                    </div>
                    <div className="word">
                        <p> “алма”</p></div>
                </div>

                <div className="answers-container">
                    <div className="button-row">
                        <button onClick={handleButtonClick} className="button-picture"><img src="./src/assets/apple.png"/></button>
                        <button className="button-picture"><img src="./src/assets/cup.png"/></button>
                    </div>

                    <div className="text-row">
                        <div className="text-answer"><p>Яблоко</p></div>
                        <div className="text-answer"><p>Кружка</p></div>
                    </div>

                    <div className="button-row">
                        <button className="button-picture"><img src="./src/assets/pie.png"/></button>
                        <button className="button-picture"><img src="./src/assets/banana.png"/></button>
                    </div>

                    <div className="text-row">
                        <div className="text-answer"><p>Пирог</p></div>
                        <div className="text-answer"><p>Банан</p></div>
                    </div>

                </div>

            </div>

            <div className="buttons-container">
                <div className="button-skip-div">
                    <Link to="/course">
                        <button>Пропустить</button>
                    </Link>
                </div>
                <div className="button-next-div">
                    <Link to="/course">
                        <button >Завершить</button>
                    </Link>
                </div>
            </div>
            <div className="window">
                {showPopup && <div className="popup">

                        <img src="./src/assets/barsik.png"/>
                        <h3>Правильно! +1 балл</h3>
                    <Link to="/task"><button type="button" className="button-next" onClick={handleButtonClick}>Супер!</button></Link>

                </div>}
            </div>

        </div>
    );
};

export default Task;