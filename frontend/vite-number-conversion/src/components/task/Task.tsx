import "./Task.css"
import {Link} from "react-router-dom";

const Task: React.FC = () => {
    return (
        <div className="task-container">

            <div className="tack-content-container">
                <div className="question"><p>Выберите слово <strong> “алма”</strong></p></div>

                <div className="answers-container">
                    <div className="button-row">
                        <button className="button-picture"><img src="./src/assets/apple.png"/></button>
                        <button className="button-picture"><img src="./src/assets/cup.png"/></button>
                    </div>

                    <div className="text-row">
                    <div className="text-answer">яблоко</div>
                        <div className="text-answer">чашка</div>
                    </div>

                    <div className="button-row">
                        <button className="button-picture"><img src="./src/assets/pie.png"/></button>
                        <button className="button-picture"><img src="./src/assets/banana.png"/></button>
                    </div>

                    <div className="text-row">
                        <div className="text-answer">пирог</div>
                        <div className="text-answer">бананы</div>
                    </div>

                </div>

            </div>

            <div className="buttons-container">
                <div className="button-skip-div">
                    <button type="button" className="button-skip">Пропустить</button>
                </div>
                <div className="button-next-div">
                    <Link to="/"><button type="button" className="button-next">Завершить</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Task;