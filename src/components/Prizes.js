import React, { Component } from 'react'
import Prize from './Prize';

class Prizes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img_explorez: "prix-1.jpg",
      img_esquissez: "prix-2.jpg",
      img_concretisez: "prix-3.jpg",
      title_explorez: "Obtention de",
      title_esquissez: "2e place",
      title_concretisez: "Bourse du FICSUM"
    }
  }
  render() {
    return (
      <div className="container-fluid prizes" id="prizes">
        <row>
          <div className="container prizes">
            <h3 className="prizes-subtitle">On parle de nous</h3>
            <h2 className="prizes-title">Prix et mentions</h2>
            <div className="row list-prizes">
              <div class="col-sm-6 col-lg-4  prize-container">
                <Prize prizeImg={this.state.img_explorez} prizeTitle={this.state.title_explorez} />
              </div>
              <div class="col-sm-6 col-lg-4  prize-container">
                <Prize prizeImg={this.state.img_esquissez} prizeTitle={this.state.title_esquissez} />
              </div>
              <div class="col-sm-6 col-lg-4  prize-container">
                <Prize prizeImg={this.state.img_concretisez} prizeTitle={this.state.title_concretisez} />
              </div>
            </div>
          </div>
        </row>
      </div>
    )
  }
}

export default Prizes
