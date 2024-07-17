import React from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import NavBar from 'components/NavBar';
import Home from 'components/pages/Home';
import About from 'components/pages/About';
import Projects from 'components/pages/Projects';
import Contact from 'components/pages/Contact';
import Expertise from 'components/pages/Expertise';


export default class App extends React.Component{

    public render(): React.ReactNode {
        return (
            <div className="App">
                    <NavBar/>
                    <div>
                        <Routes>
                            <Route path="/" element={<Home/>} />
                            <Route path="/about" element={<About/>} />
                            <Route path="/projects" element={<Projects/>} />
                            <Route path="/expertise" element={<Expertise/>} />
                            <Route path="/contact" element={<Contact/>} />
                        </Routes>
                    </div>
            </div>
        );
    }
  }