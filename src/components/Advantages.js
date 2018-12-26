import React from 'react';

class Advantages extends React.Component {
  render() {
    return (
      <div name="advantages" id="advantages" class="container-fluid advantages">
        <div class="container">
          <div class="row">
            <div class="col-10 text-center">
              <h3>Des avantages pour tous </h3>
              <h2>Advensci est une application permettant aux utilisateurs de trouver des études qui correspondent à leurs attentes</h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="etudes col-lg-4">
            <img src="/img/ico3.png"></img>
            <p>Choisissez parmi différents types d’études disponibles</p>
          </div>
          <div class="rayon col-lg-4">
            <img src="/img/ico4.png"></img>
            <p>Déterminer le rayon qui vous intéresse selon votre emplacement </p>
          </div>
          <div class="compensation col-lg-4">
            <img src="/img/ico1.png"></img>
            <p>Indiquez votre fourchette de compensation désirée et explorez vos options </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Advantages;
