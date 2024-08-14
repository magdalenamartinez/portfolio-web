import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from './components/index';
import Contact from './components/contact';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n/i18n';

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <Header/>
        <Routes>
          <Route path='https://magdalenamartinez.github.io/portfolio-web/' element={<Index/>} />
          <Route path='https://magdalenamartinez.github.io/portfolio-web/contact' element={<Contact/>} />
        </Routes>
        <Footer/>
      </Router>
    </I18nextProvider>
  );
}

export default App;
