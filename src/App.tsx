
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import AppLayout from './ui/AppLayout'
import Error from './ui/Error'

import Home from './ui/Home'
import ViewMovie from './Features/BookMovie/ViewMovie'
import ViewTheater from './Features/BookMovie/ViewTheater'
import React, { useEffect, useState } from 'react'
import BookMovie from './Features/BookMovie/BookMovie'
import Invoice from './Features/BookMovie/Invoice'
import { getData } from './services/MovieDataApi'
import LikedMovies from './Features/BookMovie/LikedMovies'

function App() {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    async function loadData() {
      const apiData = await getData()
      setApiData(await apiData.movies)
    }
    loadData()
  }, [])

  const [history, setHistory]: any = useState([]);
  const [total, setTotal]: any = useState(0);
  
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/viewMovie',
          element:
            <ViewMovie
              moviesData={apiData}
            />
        },
        {
          path: '/favoriteMovies',
          element:
            <LikedMovies
              moviesData={apiData}
            />
        },
        {
          path: '/viewTheater',
          element:
            <ViewTheater
              moviesData={apiData}
            />
        },
        {
          path: '/BookMovie/:id',
          element:
            <BookMovie
              moviesData={apiData}
              setHistory={setHistory}
            />
        },
        {

          path: '/Invoice',
          element:
            <Invoice
              total={total}
              setTotal={setTotal}
              history={history}
              moviesData={apiData}
            />
        }
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default React.memo(App)


{/*
  dummy data if your json will not work.

  "movies":[
        {
            "id": 1,
            "image": "../../boweryboyd.jpeg",
            "name": "The Bowery Boys",
            "description": "Some quick example text to build on the card title and make up the bulk of the cards content.",
            "genre": ["Drama 🤏", "Comedy 👌", "Action 🤘"],
            "totalTickets": 10,
            "price": 100,
            "time":"Monday - 12 jan (10:30)",
            "availBox1": [
              {
                "seat": 1,
                "packed": false
              },
              {
                "seat": 2,
                "packed": false
              },
              {
                "seat": 3,
                "packed": false
              },
              {
                "seat": 4,
                "packed": false
              },
              {
                "seat": 5,
                "packed": false
              },
              {
                "seat": 6,
                "packed": false
              },
              {
                "seat": 7,
                "packed": false
              },
              {
                "seat": 8,
                "packed": false
              },
              {
                "seat": 9,
                "packed": false
              },
              {
                "seat": 10,
                "packed": false
              }]
        }
      ]
*/}