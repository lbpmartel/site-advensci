import React from 'react';
import Member from './Member';

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
      name_rayane: "Rayane Zahal",
      name_guillaume: "Guillaume Rocher",
      name_louis: "Louis-Bernard Poulin",
      name_luis: "Luis-Gaylor Nobre"
    }
  }
  render() {
    return (
      <div class="container-fluid team" id="team">
        <div class="container">
          <h3>Qui sommes-nous ?</h3>
          <h2>Une équipe multidisciplinaire</h2>
          <div class="row membres">
            <div class="col-sm-6 col-lg-3 col-md-6 m-3">
              <Member memberImg={this.state.img_rayane} memberName={this.state.name_rayane} memberTitle={this.state.titre_rayane} />
            </div>
            <div class="col-sm-6 col-lg-3 col-md-6 m-3">
              <Member memberImg={this.state.img_guillaume} memberName={this.state.name_guillaume} memberTitle={this.state.titre_rayane} />
            </div>
            <div class="col-sm-6 col-lg-3 col-md-6 m-3">
              <Member memberImg={this.state.img_louis} memberName={this.state.name_louis} memberTitle={this.state.titre_rayane} />
            </div>
            <div class="col-sm-6 col-lg-3 col-md-6 m-3">
              <Member memberImg={this.state.img_luis} memberName={this.state.name_luis} memberTitle={this.state.titre_rayane} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Team;
