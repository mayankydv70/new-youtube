import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import  { Provider } from 'react-redux'
import Header from './components/Header'
import Body from './components/Body'
import store from './utils/store'
import MainContainer from './components/MainContainer'
import WatchPage from './components/WatchPage'

const App = () => {

  const appRouter = createBrowserRouter([{
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/Watch",
        element: <WatchPage />,
      }
    ]
  }])
  return (

    <Provider store={store}>
    <div className=''>
      <Header />
      <RouterProvider router={appRouter}>
      <Body />
      </RouterProvider>
    </div>
    </Provider>
  )
}

export default App