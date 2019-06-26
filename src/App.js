import React, { Component } from 'react';

import Header from './components/Header';
import Mission from './components/Mission';
import Advantages from './components/Advantages';
import Team from './components/Team';
import Contact from './components/Contact';
import Prizes from './components/Prizes';
import Sponsors from './components/Sponsors';
import Social from './components/Social';
<<<<<<< HEAD
import Footer from './components/Footer';
import Translation from './components/Translation';

||||||| merged common ancestors
=======
import Footer from './components/Footer';

>>>>>>> 22f264f1dd6a527d54dfe2ca3f142bd42271d10f
import './App.scss';

<<<<<<< HEAD
import jsonData from './texts.json';
//import { runInThisContext } from 'vm';

||||||| merged common ancestors
=======
import jsonData from './texts.json';

>>>>>>> 22f264f1dd6a527d54dfe2ca3f142bd42271d10f
class App extends Component {
<<<<<<< HEAD
   constructor(props) {
      super(props);
      this.onLanguageChange = this.onLanguageChange.bind(this);
      this.getTranslationText = this.getTranslationText.bind(this);

      var data = JSON.parse(JSON.stringify(jsonData));
      const preferedLanguage = this.getPreferedLanguage();
      this.state = {
         language: preferedLanguage,
         translationTexts: data
      }

   }

   getPreferedLanguage() {
      //const localStorage = window.localStorage();
      const localStorageLanguage = localStorage.getItem('prefered_language');
      // Si le user a déjà visité le site, on a enregistré son prefered_language 
      if (localStorageLanguage && (localStorageLanguage === "fr" || localStorageLanguage === "en"))
         return localStorageLanguage;
      //Si le user n'a pas visité le site, on regarde son langage de browser.
      else {
         var userLanguage = window.navigator.userLanguage || window.navigator.language;
         if (userLanguage.substring(0, 2) === "fr" || userLanguage.substring(0, 2) === "en")
            return userLanguage.substring(0, 2);
      }
      //Francais par défaut 
      return "fr";
   }

   componentDidMount() {
      scrollFunction();
   }

   onLanguageChange() {
      var newLanguage;
      if (this.state.language === "fr")
         newLanguage = "en";
      else
         newLanguage = "fr";

      localStorage.setItem('prefered_language', newLanguage);
      window.location.reload()
   }

   getTranslationText(textKey, stringNeeded) {
      if (stringNeeded) {
         const textes = this.state.translationTexts;
         const lang = this.state.language;
         const retour = textes[`${lang}`][`${textKey}`];
         debugger;
         return retour;
      }
      return <Translation
         texts={this.state.translationTexts}
         language={this.state.language}
         textKey={textKey} />;
   }

||||||| merged common ancestors
=======
   constructor(props) {
      super(props)
      var data = JSON.parse(JSON.stringify(jsonData));
      this.state = {
         translationTexts: data
      }
   }

   componentDidMount() {
      scrollFunction();
   }

>>>>>>> 22f264f1dd6a527d54dfe2ca3f142bd42271d10f
   render() {
      return (
         <main>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="navbar">
               <div className="container">
                  <a className="navbar-brand" href="/" id="navbar-brand">
                     <img className="logo img-fluid" src="/img/logo.png" alt="" id="logo" />
                  </a>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                     <span className="navbar-toggler-icon"></span>
                  </button>

                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                     <ul className="navbar-nav ml-auto">
                        {/* <li className="nav-item">
                           <a className="nav-link" href="mailto:info@advensci.ca"><img src="img/ma.png" alt=""></img></a>
                        </li> */}
                        <li className="nav-item">
                           <a className="nav-link" href="https://facebook.com/advensci.inc"><img className="icone-contact" src="img/fa.png" alt=""></img></a>
                        </li>
                        <li className="nav-item" >
                           <a className="nav-link" href="https://twitter.com/advensci"><img className="icone-contact" src="img/twi.png" alt=""></img></a>
                        </li>
                        <li className="nav-item">
                           <a className="nav-link" href="https://www.linkedin.com/company/advensci/about/"><img className="icone-contact" src="img/lnkd.png" alt=""></img></a>
                        </li>
                        <li className="nav-item ml-lg-4 ml-sm-2 pt-lg-1">
                           <a className="nav-link" onClick={this.onLanguageChange}>
                              {this.state.language === "fr" ?
                                 <span className="language-choice">En</span> :
                                 <span className="language-choice">Fr</span>
                              }
                           </a>
                        </li>
                     </ul>
                  </div>
               </div>
            </nav>
            <Header translator={this.getTranslationText} language={this.state.language} />
            <Mission translator={this.getTranslationText} />
            <Advantages translator={this.getTranslationText} />
            <div className="container-fluid bg-team-prize" id="bg-team-prize">
<<<<<<< HEAD
               <Team
                  translator={this.getTranslationText} />
               <Contact translator={this.getTranslationText} />
||||||| merged common ancestors
               <Team />
               <Contact />
=======
               <Team texts={
                  this.state.translationTexts
               } />
               <Contact />
>>>>>>> 22f264f1dd6a527d54dfe2ca3f142bd42271d10f
            </div>
<<<<<<< HEAD
            <Prizes translator={this.getTranslationText} />
            <Sponsors translator={this.getTranslationText} />
            <Social translator={this.getTranslationText} />
            <Footer translator={this.getTranslationText} />
||||||| merged common ancestors
            <Prizes />
            <Sponsors />
            <Social />

=======
            <Prizes />
            <Sponsors />
            <Social />
            <Footer />
>>>>>>> 22f264f1dd6a527d54dfe2ca3f142bd42271d10f
         </main>
      );
   }
}

// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size and add white bg
// Also, if the screen is too small, we add the responsive menu instead
window.onscroll = function () { scrollFunction() };
window.onload = function () { scrollFunction() };

function scrollFunction() {
   if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80 || window.innerWidth < 1440) {
      document.getElementById("logo").style.height = "84px";
      document.getElementById("navbar").style.backgroundColor = "rgba(255,255,255, 0.8)";
      document.getElementById("navbar").style.height = "133px";
      document.getElementById("navbar-brand").style.margin = "0px 0px";
      document.getElementById("navbar-brand").style.left = "calc(50% - 35px)";
      document.getElementById("navbarSupportedContent").style.marginBottom = "auto";
   } else {
      document.getElementById("logo").style.height = "100%";
      document.getElementById("navbar").style.backgroundColor = "transparent";
      document.getElementById("navbar").style.height = "auto";
      document.getElementById("navbar-brand").style.marginTop = "35px";
      document.getElementById("navbar-brand").style.left = "calc(50% - 56px)";
      document.getElementById("navbarSupportedContent").style.marginBottom = "0";
   }
}

export default App;
