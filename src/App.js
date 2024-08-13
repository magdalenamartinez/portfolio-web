import './App.css';
import './css/importcss.js';
import Header from './components/header';
import Footer from './components/footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from './components/index.js';
import Contact from './components/contact.js';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n/i18n.js';


function App() {
  return (
    <I18nextProvider>
    <div className="generalClass">
      <Router>
          <Header/>
          <Routes>
            <Route path='/' element={<Index/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
          </Routes>
          <Footer/>
      </Router>
    </div> 
    </I18nextProvider>
   
    
  );
}

export default App;
