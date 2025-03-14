import React from 'react';
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
      <Router basename={process.env.PUBLIC_URL}>
        <div className="appContainer">
          <Header />
          <main className="mainContent">
            <Routes>
              <Route path='/' element={<Index />} />
              <Route path='/contact' element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </I18nextProvider>
  );
}

export default App;
