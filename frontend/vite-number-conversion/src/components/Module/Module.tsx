import {useState} from 'react';
import './Module.css';
import {Link} from "react-router-dom";

const Module: React.FC = () => {
    const [openLevel2, setOpenLevel2] = useState<number | null>(null);

    const handleItemClick = (level: string, index: number): void => {
        switch (level){
            case 'level1':
                setOpenLevel2(openLevel2 === index ? null : index);
        break;
        }
    }

    return (

        <div className="module-container">
        <div className="barsik">
            <img src="./src/assets/barsik.png"/>
        </div>
            <ul className="level1">

                <li onClick={
                    () => handleItemClick("level1", 1)
                }>
                    <div className="themodule">
                        <p>Module 1</p>
                        <h3>Introduction</h3>
                    </div>
                </li>
{openLevel2 === 1 && (
                    <ul className="level2">
                        <div className="task-level2">
                            <li onClick={() => handleItemClick('level2', 1)}>
                                <div className="task">
                                    <p>Module 1</p>
                                    <h4>Reference material</h4>
                                    <p><a href="#">Go to reference material</a></p>
                                </div>
                            </li>
                        </div>
                        <div className="task-level2">
                            <li onClick={() => handleItemClick('level2', 1)}>
                                <div className="task">
                                    <p>First Task</p>
                                    <h4><Link to="/task">First words</Link></h4>
                                    <p>Reading and learning your first word</p>
                                </div>
                            </li>
                        </div>


                    </ul>
)}
            </ul>
            <ul className="level1-disabled">

                <li onClick={
                    () => handleItemClick("level1", 1)
                }>
                    <div className="themodule-disabled">
                        <p>Module 2</p>
                        <h3>Basic phrases</h3>
                    </div>
                </li>

            </ul>
            <ul className="level1-disabled">

                <li onClick={
                    () => handleItemClick("level1", 1)
                }>
                    <div className="themodule-disabled">
                        <p>Module 3</p>
                        <h3>Grammar</h3>
                    </div>
                </li>

            </ul>
        </div>
    );
};

export default Module;
