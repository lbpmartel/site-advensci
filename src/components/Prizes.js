import React, { Component } from 'react'
import Prize from './Prize';

class Prizes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img_explorez: "prix-1.jpg",
      img_esquissez: "prix-2.jpg",
      img_concretisez: "prix-3.jpg"
    }
  }
  render() {
    return (
      <div className="container-fluid prizes" id="prizes">
        <div className="container prizes">
          <div className="row">
            <div className="col text-center">
              <h3 className="prizes-subtitle">{this.props.translator('prizes_title')}</h3>
              <h2 className="prizes-title">{this.props.translator('prizes_subtitle')}</h2>
            </div>
          </div>
          <div className="row list-prizes">
            <div className="col-sm-6 col-lg-4  prize-container">
              <Prize prizeImg={this.state.img_explorez} prizeTitle={this.props.translator('prizes_1')} />
            </div>
            <div className="col-sm-6 col-lg-4  prize-container">
              <Prize prizeImg={this.state.img_esquissez} prizeTitle={this.props.translator('prizes_2')} />
            </div>
            <div className="col-sm-6 col-lg-4  prize-container">
              <Prize prizeImg={this.state.img_concretisez} prizeTitle={this.props.translator('prizes_3')} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Prizes
