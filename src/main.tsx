import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createHashRouter } from 'react-router-dom';

import Layout from './routes/Layout';
import { AddPost } from './components/AddPost';
import { Posts } from './components/Posts';

import './index.css';

const router = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'add-post/',
        element: <AddPost />,
      },
      {
        path: 'timeline/',
        element: <Posts />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
