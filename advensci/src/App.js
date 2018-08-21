import React, { Component } from 'react';
import Header from './components/Header';
import Mission from './components/Mission';
import Team from './components/Team';
import Contact from './components/Contact';
import './App.css';

class App extends Component {
  render() {
    return (
      <main>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a class="nav-link" href="#">Mission<span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Notre équipe<span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Prix<span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contactez-nous<span class="sr-only">(current)</span></a>
        </li>
      </ul>
      </div>
    </nav>
    <Header />
    <Mission />
    <Team />

    <Contact />
    </main>

    );
  }
}

export default App;
