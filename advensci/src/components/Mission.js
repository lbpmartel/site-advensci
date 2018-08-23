import React from 'react';

class Mission extends React.Component {
  render() {
    return (
      <div name="mission" class="container-fluid mission vertical-center">
        <div class="container">
        <div class="row">
          <div class="col-md-4">
            <img class="d-block mx-auto icon-mission"  src="./img/science.png" alt="science"/>
            <br />
            <p class="mission-p">
              Découvre qui se fait dans le monde de la recherche en
              trouvant des études qui t'intéressent à partir d'une
              application facile à utiliser.
            </p>
          </div>
          <div class="col-md-4">
            <img class="d-block mx-auto icon-mission" src="./img/telephone.png" alt="phone"/>
            <br />
            <p class="mission-p">
              Advensci est une plateforme accessible qui permet
              aux chercheurs de recruter des participants pour
              leurs études.
            </p>
          </div>
          <div class="col-md-4">
            <img class="d-block mx-auto icon-mission" src="./img/argent.png" alt="money"/>
            <br />
            <p class="mission-p">
              Bénéficie de compensations financières tout en
              contribuant à l’avancement de la science!
            </p>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default Mission;
