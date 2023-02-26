import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import { Header } from '../components/Header';
import { Navigation } from '../components/Navigation';

export default function Layout() {
  const navigate = useNavigate();

  // after login success or page update go to timeLine.
  React.useEffect(() => {
    navigate('/timeline');
  }, []);

  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <Header />
      <Outlet />
      <Navigation />
    </div>
  );
}
