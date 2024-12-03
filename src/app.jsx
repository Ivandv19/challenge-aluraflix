import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import { GlobalProvider } from './contexts/GlobalContext';
import GlobalStyles from './components/GlobalStyles';
import Footer from './components/Footer';

function App() {
  return (
    <GlobalProvider>
      <GlobalStyles />
      <Header />
      <Outlet />
      <Footer />
    </GlobalProvider>
  );
}

export default App;
