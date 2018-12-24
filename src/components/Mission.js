import React from 'react';

class Mission extends React.Component {
  render() {
    return (
      <div name="mission" id="mission" class="container-fluid mission px-0">
        <div class="row">
          <div class="participants col-lg-6">
            <h3>Participants</h3>
            <h2 class="text-white">Avez-vous déjà considéré contribuer à l'avancement de la science tout en étant rémunéré?</h2>
            <p>Trouvez des études qui vous intéressent et avec lesquelles vous êtes confortables ainsi que l'emplacement idéal pour accommoder votre horaire.</p>
            <a href="#inscription">Inscrivez-vous</a>
          </div>
          <div class="chercheurs col-lg-6">
          <h3>Chercheurs</h3>
            <h2 class="text-white">Êtes-vous à la recherche de participants pour une étude?</h2>
            <p>Accélérez votre recrutement en nous laissant vous présenter des participants motivés qui correspondent à vos critères.</p>
            <a href="#inscription">Inscrivez-vous</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Mission;
