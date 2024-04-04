
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

function App() {
  const[apiData, setApiData] = useState([]);
  useEffect(()=> {
    async function loadData() {
      const apiData = await getData()
      setApiData(await apiData.movies)
          }
          loadData()
  },[])

  

  // console.log("data111",apiData[0].availBox1);
  const movies = [
    {
      "id": 1,
      "image": "../../vite.svg",
      "name": "The Bowery Boys",
      "description": "Some quick example text to build on the card title and make up the bulk of the cards content.",
      "genre": ["Drama", "Comedy", "Action"],
      "totalTickets": 10,
      "price": 100,
      "time":"Monday - 12 jan (10:30)"
    },
    {
      "id": 2,
      "image": "../../vite.svg",
      "name": "The Nun",
      "description": "Some quick example text to build on the card title and make up the bulk of the cards content.",
      "genre": ["Thriller", "Drama"],
      "totalTickets": 10,
      "price": 100,
      "time":"Tuesday - 13 jan (10:30)"
    },
    {
      "id": 3,
      "image": "../../vite.svg",
      "name": "The Nun 2",
      "description": "Some quick example text to build on the card title and make up the bulk of the cards content.",
      "genre": ["Thriller", "Drama"],
      "totalTickets": 10,
      "price": 150,
      "time":"Tuesday - 13 jan (17:30)"
    }
  ]

  const availBox1: any = [
    {
      seat: 1,
      packed: false
    },
    {
      seat: 2,
      packed: false
    },
    {
      seat: 3,
      packed: false
    },
    {
      seat: 4,
      packed: false
    },
    {
      seat: 5,
      packed: false
    },
    {
      seat: 6,
      packed: false
    },
    {
      seat: 7,
      packed: false
    },
    {
      seat: 8,
      packed: false
    },
    {
      seat: 9,
      packed: false
    },
    {
      seat: 10,
      packed: false
    },

  ]
  console.log(movies);
  
  const [availBox, setAvailable] = useState(availBox1);
  const [history, setHistory]: any = useState([]);
  const [total, setTotal]: any = useState(0);
  // setMoviesData(apiData);
  // console.log("ajpoid",moviesData)
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
              availBox={availBox}
              setAvailable={setAvailable}
              history={history}
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
  console.log(availBox);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default React.memo(App)
