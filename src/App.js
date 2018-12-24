import React, { Component } from 'react';
import Header from './components/Header';
import Mission from './components/Mission';
import Team from './components/Team';
import Contact from './components/Contact';
import Prizes from './components/Prizes';
import Model from './components/Model';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
    render() {
        return (
            <main>
                <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                    <div class="container">
                        <a class="navbar-brand" href="#">
                            <img class="logo" src="/img/logo.png" />
                        </a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav ml-auto">
                                <li class="nav-item">
                                    <a class="nav-link" href="mailto:info@advensci.ca"><img src="img/ma.jpg"></img></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="http://facebook.com"><img src="img/fa.jpg"></img></a>                                    
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="http://twitter.com"><img src="img/tw.jpg"></img></a>                            
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <Header/>
                {/* <Citation /> */}
                <Mission />
                <Team />
                <Model />
                <Prizes />
                <Contact />
                <Footer />
                
            </main>

        );
    }
}

export default App;
