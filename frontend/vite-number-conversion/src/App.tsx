import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import SingleModule from './pages/singleModule/SingleModule';
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<SingleModule />} />
            </Routes>
        </Router>
    );
}

export default App;
