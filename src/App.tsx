import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AuthProvider from './context/AuthContext';
import Routes from './routes';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import './styles/index.css';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes />
        <Footer />
      </Router>
    </AuthProvider>
  );
};

export default App;