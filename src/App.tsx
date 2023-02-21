import React from 'react';
import './App.scss';
import { Header } from './components/Header/Header';
import { Presentation } from './components/Presentation/Presentation';
import { ProjectDisplay } from './components/ProjectDIsplay/ProjectDisplay';
import { Projects } from './components/Projects/Projects';
import { Startpage } from './components/Startpage/Startpage';

function App() {
  return (
    <>
<Startpage></Startpage>
   <ProjectDisplay></ProjectDisplay>
   </>
  );
}

export default App;
