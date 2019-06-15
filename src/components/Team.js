import React from 'react';
import Member from './Member';

import Translation from './Translation';

class Team extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img_rayane: "rayane.jpg",
      img_guillaume: "guillaume.jpg",
      img_louis: "louis.jpg",
      img_luis: "luis.jpg",
      titre_rayane: "Fondatrice, directrice générale",
      titre_guillaume: "Cofondateur",
      titre_louis: "Développeur",
      titre_luis: "Directeur technique",
      desc_rayane: "En tant qu’étudiante chercheuse au Ph.D. en neuropsychologie, Rayane a réalisé que le recrutement de participantes aux études est un des plus grands défis en recherche, ce qui a donné naissance à l’idée.",
      desc_guillaume: "Guillaume est détenteur d’un baccalauréat en sciences économiques et manager d’une branche de technologie de l’information dans une firme de consultation. Il a co-fondé Advensci et agit comme directeur des finances. ",
      desc_louis: "Louis est étudiant en informatique à l'Université du Québec à Montréal. Passionné par les projets innovants et le monde des start-ups, il donne son 100% pour traduire un projet de société en code.",
      desc_luis: "Étudiant en informatique à l’Université du Québec à Montréal, Luis agira comme directeur technique. De par son expérience en développement et en entreprenariat, il saura guider notre équipe.",
      name_rayane: "Rayane Zahal",
      name_guillaume: "Guillaume Rocher",
      name_louis: "Louis-Bernard Poulin",
      name_luis: "Luis-Gaylor Nobre"
    }
  }
  render() {
    return (
      <div class="container team" id="team">
        <div class="row title">
          <div class="col">
            <h3>Qui sommes-nous ?</h3>
            <h2>Une équipe multidisciplinaire</h2>
          </div>
        </div>
        <div class="row membres">
          <div class="col-sm-6 col-lg-3 col-md-6 pb-3 pb-lg-0">
            <Member
              memberImg={this.state.img_rayane}
              memberName={this.state.name_rayane}
              memberTitle={<Translation texts={this.props.texts} langage={"fr"} cle={"titre_rayane"} />}
              memberDesc={this.state.desc_rayane} />
          </div>
          <div class="col-sm-6 col-lg-3 col-md-6 pb-3 pb-lg-0">
            <Member memberImg={this.state.img_guillaume} memberName={this.state.name_guillaume} memberTitle={this.state.titre_guillaume} memberDesc={this.state.desc_guillaume} />
          </div>
          <div class="col-sm-6 col-lg-3 col-md-6 pb-3 pb-lg-0">
            <Member memberImg={this.state.img_louis} memberName={this.state.name_louis} memberTitle={this.state.titre_louis} memberDesc={this.state.desc_louis} />
          </div>
          <div class="col-sm-6 col-lg-3 col-md-6 pb-3 pb-lg-0">
            <Member memberImg={this.state.img_luis} memberName={this.state.name_luis} memberTitle={this.state.titre_luis} memberDesc={this.state.desc_luis} />
          </div>
        </div>
      </div>
    );
  }
}

export default Team;
