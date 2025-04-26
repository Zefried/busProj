import { useState, useEffect } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './home';
import Test from './test';
import TestTwo from './testTwo';
import AdminMiddleware from './adminMiddleware';
import axios from 'axios';



function App() {
  
  axios.defaults.baseURL = 'http://127.0.0.1:8000/';

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AdminMiddleware> <Home/></AdminMiddleware>}>
              <Route path='test'element={<Test></Test>} />
              <Route path='testTwo'element={<TestTwo></TestTwo>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
