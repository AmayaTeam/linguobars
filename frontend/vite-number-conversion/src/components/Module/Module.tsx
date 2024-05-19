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
                        <p>Модуль #1</p>
                        <h3>Первые шаги</h3>
                    </div>
                </li>
{openLevel2 === 1 && (
                    <ul className="level2">
                        <div className="task-level2">
                            <li onClick={() => handleItemClick('level2', 1)}>
                                <div className="task">
                                    <p>Модуль #1</p>
                                    <h4>Справочный материал</h4>
                                    <p><Link to="/material">Перейти</Link></p>
                                </div>
                            </li>
                        </div>
                        <div className="task-level2">
                            <li onClick={() => handleItemClick('level2', 1)}>
                                <div className="task">
                                    <p>Задание #1</p>
                                    <h4><Link to="/task">Первые слова</Link></h4>
                                    <p>Читаем и запоминаем первые слова</p>
                                </div>
                            </li>
                        </div>


                    </ul>
)}
            </ul>
            <ul className="level1-disabled">

                <li >
                    <div className="themodule-disabled">
                        <p>Модуль #2</p>
                        <h3>Основные фразы</h3>
                    </div>
                </li>

            </ul>
            <ul className="level1-disabled">

                <li>
                    <div className="themodule-disabled">
                        <p>Module 3</p>
                        <h3>Грамматика</h3>
                    </div>
                </li>

            </ul>
        </div>
    );
};

export default Module;
