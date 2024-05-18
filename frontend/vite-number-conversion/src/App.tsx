import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import SingleModule from './pages/singleModule/SingleModule';
import TaskPage from './pages/TaskPage/TaskPage';
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<SingleModule />} />
                <Route path="/task" element={<TaskPage />} />
            </Routes>
        </Router>
    );
}

export default App;
