import React from 'react';
import Member from './Member';

class Team extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img_rayane: "rayane_compressed.png",
      img_guillaume: "guillaume_compressed.png",
      img_louis: "louis_compressed.png",
      img_luis: "luis_compressed.png",
      img_francis: "francis_compressed.jpg",
      name_rayane: "Rayane Zahal",
      name_guillaume: "Guillaume Rocher",
      name_louis: "Louis-Bernard Poulin",
      name_luis: "Luis Gaylor Nobre",
      name_francis: "Francis Roy"

    }
  }
  render() {
    return (
      <div class="container-fluid team" id="team">
        <div class="container">
          <h2 class="title">Notre équipe</h2>
          <div class="row">
            <div class="col-sm-6 col-lg-4">
              <Member memberImg={this.state.img_rayane} memberName={this.state.name_rayane} />
            </div>
            <div class="col-sm-6 col-lg-4">
              <Member memberImg={this.state.img_guillaume} memberName={this.state.name_guillaume} />
            </div>
            <div class="col-sm-6 col-lg-4">
              <Member memberImg={this.state.img_louis} memberName={this.state.name_louis} />
            </div>
            <div class="col-sm-6">
              <Member memberImg={this.state.img_francis} memberName={this.state.name_francis} />
            </div>
            <div class="col-sm-6">
              <Member memberImg={this.state.img_luis} memberName={this.state.name_luis} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Team;
