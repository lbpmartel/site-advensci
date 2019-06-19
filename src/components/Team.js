import React from 'react';
import Member from './Member';

class Team extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title_rayane: "Fondatrice, directrice générale",
      desc_rayane: "En tant qu’étudiante chercheuse au Ph.D. en neuropsychologie, Rayane a réalisé que le recrutement de participantes aux études est un des plus grands défis en recherche, ce qui a donné naissance à l’idée.",
      name_rayane: "Rayane Zahal",
      title_guillaume: "Cofondateur",
      title_louis: "Développeur",
      title_luis: "Directeur technique",
      desc_guillaume: "Guillaume est détenteur d’un baccalauréat en sciences économiques et manager d’une branche de technologie de l’information dans une firme de consultation. Il a co-fondé Advensci et agit comme directeur des finances. ",
      desc_louis: "Louis est étudiant en informatique à l'Université du Québec à Montréal. Passionné par les projets innovants et le monde des start-ups, il donne son 100% pour traduire un projet de société en code.",
      desc_luis: "Étudiant en informatique à l’Université du Québec à Montréal, Luis agira comme directeur technique. De par son expérience en développement et en entreprenariat, il saura guider notre équipe.",
      name_guillaume: "Guillaume Rocher",
      name_louis: "Louis-Bernard Poulin",
      name_luis: "Luis-Gaylor Nobre"
    }
  }

  render() {
    return (
      <div className="container team" id="team">
        <div className="row title">
          <div className="col">
            <h3>{this.props.translator('team_title')}</h3>
            <h2>{this.props.translator('team_subtitle')}</h2>
          </div>
        </div>
        <div className="row membres">
          <div className="col-sm-6 col-lg-3 col-md-6 pb-3 pb-lg-0">
            <Member
              memberImg={"rayane.jpg"}
              memberName={"Rayane Zahal"}
              memberTitle={this.props.translator('team_title_rayane')}
              memberDesc={this.props.translator('team_desc_rayane')} />
          </div>
          <div className="col-sm-6 col-lg-3 col-md-6 pb-3 pb-lg-0">
            <Member
              memberImg={"guillaume.jpg"}
              memberName={"Guillaume Rocher"}
              memberTitle={this.props.translator('team_title_guillaume')}
              memberDesc={this.props.translator('team_desc_guillaume')} />
          </div>
          <div className="col-sm-6 col-lg-3 col-md-6 pb-3 pb-lg-0">
            <Member
              memberImg={"louis.jpg"}
              memberName={"Louis-Bernard Poulin"}
              memberTitle={this.props.translator('team_title_louis')}
              memberDesc={this.props.translator('team_desc_louis')} />
          </div>
          <div className="col-sm-6 col-lg-3 col-md-6 pb-3 pb-lg-0">
            <Member
              memberImg={"luis.jpg"}
              memberName={"Luis-Gaylor Nobre"}
              memberTitle={this.props.translator('team_title_luis')}
              memberDesc={this.props.translator('team_desc_luis')} />
          </div>
        </div>
      </div>
    );
  }
}

export default Team;
