import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/loginPage';
import SignupPage from './pages/signupPage';
import HomeS from './pages/home';
import { PATHS } from './constants/paths';

const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path={PATHS.logIn} element={<LoginPage />} />
      <Route path={PATHS.home} element={<HomeS />} />
      <Route path={PATHS.singUp} element={<SignupPage />} />
    </Routes>
  </Router>
);

export default App;
