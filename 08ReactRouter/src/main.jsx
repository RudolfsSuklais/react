import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/home/home.jsx'
import About from './components/about/about.jsx'
import Contact from './components/contact/contact.jsx'
import User from './components/User/user.jsx'
import Github, { githubInfoLoader } from './components/github/github.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path="user/" element={<User />} >
      <Route path=":userid" element={<User />} />
      </Route>
      <Route
      loader={githubInfoLoader}
      path="github" element={<Github />}/>
      <Route path='x' element={<div>Not Found</div>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
