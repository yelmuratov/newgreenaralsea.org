import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './redux/store/index.tsx'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import {Home,Contact, Root} from './components'
import './i18n/i18n.tsx'

// Styles
import './index.css'
import News from './pages/news.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/contact', element: <Contact /> },
      { path: '/news', element: <News /> },
    ],
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
