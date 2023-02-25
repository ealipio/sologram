import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import { Header } from '../components/Header';
import { Navigation } from '../components/Navigation';

export default function Layout() {
  const navigate = useNavigate();

  React.useEffect(() => {
    navigate('/timeline');
  }, []);

  return (
    <div className="w-screen h-screen bg-slate-400 text-red-800">
      <Header />
      <Outlet />
      <Navigation />
    </div>
  );
}
