import React, { Component } from 'react';
import Header from './components/Header';
import Mission from './components/Mission';
import Advantages from './components/Advantages';
import Team from './components/Team';
import Contact from './components/Contact';
import Prizes from './components/Prizes';
import Model from './components/Model';
import Footer from './components/Footer';
import Sponsors from './components/Sponsors';
import './App.scss';

class App extends Component {
    render() {
        return (
            <main>
                <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="navbar">
                    <div className="container">
                        <a className="navbar-brand" href="#" id="navbar-brand">
                            <img className="logo" src="/img/logo.png" alt="" id="logo" />
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a className="nav-link" href="mailto:info@advensci.ca"><img src="img/ma.png" alt=""></img></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="http://facebook.com"><img src="img/fa.png" alt=""></img></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="http://twitter.com"><img src="img/tw.png" alt=""></img></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <Header />
                {/* <Citation /> */}
                <Mission />
                <Advantages />
                <Team />
                <Prizes />
                <Sponsors />
                <Contact />
                <Footer />

            </main>
        );
    }
}

// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size and add white bg
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("logo").style.height = "84px";
    document.getElementById("navbar").style.backgroundColor = "white";
    document.getElementById("navbar").style.height = "133px";
  } else {
    document.getElementById("logo").style.height = "100%";
    document.getElementById("navbar").style.backgroundColor = "transparent";
    document.getElementById("navbar").style.height = "100%";
    document.getElementById("navbar-brand").style.padding = "35px 0px";
  }
}

export default App;
