import React from 'react';
import { Route, Routes } from 'react-router';
import HomePage from './pages/HomePage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import ChatPage from './pages/ChatPage';
import CallPage from './pages/CallPage';
import OnboardingPage from './pages/OnboardingPage';
import NotificationPage from './pages/NotificationPage';
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <div className = 'h-screen' data-theme='night'>
      <Routes>
        <Route path = '/' element = {<HomePage />} />
        <Route path = '/signup' element = {<SignupPage />} />
        <Route path = '/login' element = {<LoginPage />} />
        <Route path = '/chat' element = {<ChatPage />} />
        <Route path = '/call' element = {<CallPage />} />
        <Route path = '/onboarding' element = {<OnboardingPage />} />
        <Route path = '/notification' element = {<NotificationPage />} />
      </Routes>

      <Toaster/>
    </div>
  )
};

export default App;