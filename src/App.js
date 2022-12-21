import React from 'react';
import Header from './components/Header';
import { Introduce, Project, Language } from './pages/Files';

const App = () => {
  return ( 
    <div>
      <Header />
      <Introduce />
      <Project />
      <Language />
    </div>
  )
}

export default App;