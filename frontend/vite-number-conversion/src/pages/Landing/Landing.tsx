import { Link } from "react-router-dom";
import "./Landing.css"
import LandingHeader from "../../components/landing-header/LandingHeader.tsx";
const Landing: React.FC = () => {
    return(
        <div className="landing-container">
            <LandingHeader/>
            <div className="landing-content">
                <div className="barsik">
                    <img src="./src/assets/barsik.png"/>
                </div>
                <div className="landing-heading">
                    <h1>
                        Learn Tatar Language u vse takoe
                    </h1>
                </div>
                <div>
                    <button className="go-button" type="submit">
                        <Link to="/course"><h2>Go to learn</h2></Link>
                    </button>
                </div>
                <div className="present">
                    <Link to="/"><p>Get present</p></Link>
                </div>
                <div className="pluses">
                    <div className="pluse">
                        <h2>30</h2>
                        <p>new words per day</p>
                    </div>
                    <div className="pluse">
                        <h2>5</h2>
                        <p>minuts for learning per day</p>
                    </div>
                    <div className="pluse">
                        <h2>4</h2>
                        <p>days for learn basics in tatar language</p>
                    </div>
                    <div className="pluse">
                        <h2>100</h2>
                        <p>basic phases</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Landing;