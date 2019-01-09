import React from 'react';

class Advantages extends React.Component {
  render() {
    return (
      <div name="advantages" id="advantages" className="container-fluid advantages">
        <div className="container">
          <div className="row title">
            <div className="col-lg-12 text-center m-auto">
              <h3>Des avantages pour tous </h3>
              <h2 className="title">Advensci est une application permettant aux utilisateurs de trouver des études qui correspondent à leurs attentes</h2>
            </div>
          </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="advantage etudes col">
                <img className="advantage-img" src="/img/ico3.png" alt=""></img>
                <p className="text-left text-advantage">Choisissez parmi différents types d’études disponibles</p>
              </div>
              <div className="advantage rayon col pl-lg-5">
                <img className="advantage-img" src="/img/ico4.png" alt=""></img>
                <p className="text-left text-advantage">Déterminer le rayon qui vous intéresse selon votre emplacement </p>
              </div>
              <div className="advantage compensation col pl-lg-5">
                <img className="advantage-img" src="/img/ico1.png" alt=""></img>
                <p className="text-left text-advantage">Indiquez votre fourchette de compensation désirée et explorez vos options </p>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Advantages;
