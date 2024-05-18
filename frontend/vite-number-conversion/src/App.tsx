import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import SingleModule from './pages/singleModule/SingleModule';
import TaskPage from './pages/TaskPage/TaskPage';
import MaterialPage from "./pages/MaterialPage/MaterialPage.tsx";
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<SingleModule />} />
                <Route path="/task" element={<TaskPage />} />
                <Route path="/material" element={<MaterialPage/>}/>
            </Routes>
        </Router>
    );
}

export default App;
