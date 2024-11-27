import React from 'react'
import { lazy, Suspense } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Menu from "./views/Menu"
import Footer from "./views/Footer"
import Contacto from "./views/Contacto"
import ComoJugar from "./views/ComoJugar"
import Noticias from "./views/Noticias"

const Home = lazy(() => import("./views/Home"))
const Articulo = lazy(() => import("./views/Articulo"))

function App() {

  return (
    
    <BrowserRouter>
      <Menu></Menu>
      <Suspense fallback={<div>loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/:id" element={<Articulo />} />
          <Route path="/comojugar" element={<ComoJugar />} />
          <Route path="/noticias" element={<Noticias />} />
        </Routes>
      </Suspense>
      <Footer></Footer>
    </BrowserRouter>
  )
}

export default App
