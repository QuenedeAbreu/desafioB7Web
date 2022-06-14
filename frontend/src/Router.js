import React from 'react';
//Inportacoes de Roteadores
import { Routes, Route } from 'react-router-dom';


//Importacoes de Paginas
import Home from './pages/home';
import Cores from './pages/cores';

function Router() {
  return (
    <Routes>
      <Route path='/' element={<Home />} >
        <Route path='/:id' element={<Home />} />
      </Route>

      <Route path='/cores' element={<Cores />} >
        <Route path=':id' element={<Cores />} />
      </Route>


    </Routes>
  );
}

export default Router;
