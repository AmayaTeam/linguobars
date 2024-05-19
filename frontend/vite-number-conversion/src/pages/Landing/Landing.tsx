import { Link } from "react-router-dom";
import "./Landing.css"
import LandingHeader from "../../components/landing-header/LandingHeader.tsx";
const Landing: React.FC = () => {
    return(
        <div className="landing-container">
            <LandingHeader/>
            <div className="landing-content">
                <div className="barsik">
                    <div className="img-container">
                    </div>
                </div>
                <div className="landing-heading">
                    <h1>
                        Изучите основы татарского языка
                        всего за неделю                    </h1>
                </div>
                <div>
                    <button className="go-button" type="submit">
                        <Link to="/course"><h2>Перейти</h2></Link>
                    </button>
                </div>
                <div className="present">
                    <Link to="/"><p>Получить подарок</p></Link>
                </div>
                <div className="pluses">
                    <div className="pluse">
                        <h1>30</h1>
                        <p>новых слов в день</p>
                    </div>
                    <div className="pluse">
                        <h1>5</h1>
                        <p>минут обучения в день</p>
                    </div>
                    <div className="pluse">
                        <h1>4</h1>
                        <p>дня изучения основ татарского языка</p>
                    </div>
                    <div className="pluse">
                        <h1>100</h1>
                        <p>основных фраз для разговора</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Landing;