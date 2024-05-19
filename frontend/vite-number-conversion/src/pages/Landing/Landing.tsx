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
                        Learn the basics of the Tatar language
                        in just a week                    </h1>
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
                        <h1>30</h1>
                        <p>new words per day</p>
                    </div>
                    <div className="pluse">
                        <h1>5</h1>
                        <p>minuts for learning per day</p>
                    </div>
                    <div className="pluse">
                        <h1>4</h1>
                        <p>days for learn basics in tatar language</p>
                    </div>
                    <div className="pluse">
                        <h1>100</h1>
                        <p>basic phases</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Landing;