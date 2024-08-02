
import { Routes, Route } from 'react-router-dom';
import NuevoVideo from './pages/NuevoVideo/index.jsx';
import Home from './pages/Home/index.jsx';
import App from './app.jsx';



function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<App/>}>
                <Route index element={<Home />} />
                <Route path="/nuevovideo" element={<NuevoVideo />} />
            </Route >
        </Routes >
    )
}


export default AppRoutes;