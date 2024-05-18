import "./Task.css"
import {Link} from "react-router-dom";
import {useState} from "react";

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

            <div className="tack-content-container">
                <div className="question"><p>Choose a word <strong> “алма”</strong></p></div>

                <div className="answers-container">
                    <div className="button-row">
                        <button onClick={handleButtonClick} className="button-picture"><img src="./src/assets/apple.png"/></button>
                        <button className="button-picture"><img src="./src/assets/cup.png"/></button>
                    </div>

                    <div className="text-row">
                        <div className="text-answer"><p>apple</p></div>
                        <div className="text-answer"><p>cup</p></div>
                    </div>

                    <div className="button-row">
                        <button className="button-picture"><img src="./src/assets/pie.png"/></button>
                        <button className="button-picture"><img src="./src/assets/banana.png"/></button>
                    </div>

                    <div className="text-row">
                        <div className="text-answer"><p>pie</p></div>
                        <div className="text-answer"><p>banana</p></div>
                    </div>

                </div>

            </div>

            <div className="buttons-container">
                <div className="button-skip-div">
                    <Link to="/">
                        <button>Skip</button>
                    </Link>
                </div>
                <div className="button-next-div">
                    <Link to="/">
                        <button >Complete</button>
                    </Link>
                </div>
            </div>
            {showPopup && <div className="popup">Всплывающее окно <button type="button" className="button-next" onClick={handleButtonClick}>Закрыть</button>
            </div>}
        </div>
    );
};

export default Task;