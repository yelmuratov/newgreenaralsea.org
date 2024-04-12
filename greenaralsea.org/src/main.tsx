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
import OurTeam from './pages/ourteam.tsx';
import Faq from './pages/faq.tsx';
import Whereweplant from './pages/whereweplant.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/contact', element: <Contact /> },
      { path: '/news', element: <News /> },
      { path: '/ourteam', element: <OurTeam /> },
      { path: '/faq', element: <Faq /> },
      { path: '/whereweplant', element: <Whereweplant /> },
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
