import Header from './components/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom';
import { GlobalProvider } from './contexts/GlobalContext';
import GlobalStyles from './components/GlobalStyles';


function App() {
    return (
        <GlobalProvider>
            <GlobalStyles />
            <Header />
            <Outlet />
            <Footer />
        </GlobalProvider>
    )
}

export default App;