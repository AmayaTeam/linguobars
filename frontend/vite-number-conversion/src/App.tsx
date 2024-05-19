import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import SingleModule from './pages/singleModule/SingleModule';
import TaskPage from './pages/TaskPage/TaskPage';
import MaterialPage from "./pages/MaterialPage/MaterialPage.tsx";
import Landing from "./pages/Landing/Landing.tsx"
import AboutProjectPage from "./pages/AboutProject/AboutProjectPage.tsx";
import Profile from "./pages/Profile/Profile.tsx";
import ContactsPage from "./pages/Contacts/ContactsPage.tsx";
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Landing/>}/>
                <Route path="/course" element={<SingleModule />} />
                <Route path="/task" element={<TaskPage />} />
                <Route path="/material" element={<MaterialPage/>}/>
                <Route path="/about-project" element={<AboutProjectPage/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/contacts" element={<ContactsPage/>}/>
            </Routes>
        </Router>
    );
}

export default App;
