import React from 'react';

class Mission extends React.Component {
  render() {
    return (
      <div name="mission" id="mission" className="container-fluid mission px-0">
        <div className="container">
          <div className="row">
            <div className="participants col-lg-6">
              <h3>Participants</h3>
              <h2 className="text-white">Avez-vous déjà considéré contribuer à l'avancement de la science tout en étant rémunéré?</h2>
              <p>Trouvez des études qui vous intéressent et avec lesquelles vous êtes confortables ainsi que l'emplacement idéal pour accommoder votre horaire.</p>
              <a className="btn" href="#contact">Inscrivez-vous</a>
            </div>
            <div className="chercheurs col-lg-6">
              <h3>Chercheurs</h3>
              <h2 className="text-white">Êtes-vous à la recherche de participants pour une étude?</h2>
              <p>Accélérez votre recrutement en nous laissant vous présenter des participants motivés qui correspondent à vos critères.</p>
              <a className="btn" href="#contact">Inscrivez-vous</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Mission;
