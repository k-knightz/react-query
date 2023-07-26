import { useState } from 'react'
import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Index from "./pages/Heroes/index.jsx";
import HeroDetail from "./pages/Heroes/heroDetail.jsx";
import CreateHero from "./pages/Heroes/create.jsx";
import Edit from "./pages/Heroes/edit.jsx";

function App() {
  return (
   <BrowserRouter>
       <Routes>
           <Route element={<Home/>} path="/"/>
           <Route element={<Index/>} path="/heroes"/>
           <Route element={<HeroDetail/>} path={'/heroes/:id'}/>
           <Route element={<Edit/>} path={'/edit/:id'}/>
           <Route element={<CreateHero/>} path={'/hero/create'} />
       </Routes>
   </BrowserRouter>
  )
}

export default App
