import React from 'react';
import Login from '../components/Login';
import BG from '../images/bg.jpg';

export default function LoginPage() {
  return (
    <div 
      className="min-h-screen bg-center bg-cover" 
      style={{ backgroundImage: `url(${BG})` }}
    >
      <Login/>
    </div>
  );
}
