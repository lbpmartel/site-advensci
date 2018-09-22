import React, { Component } from 'react'
import Prize from './Prize';

class Prizes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img_explorez: "innovinc_explorez_crop.png",
      img_esquissez: "innovinc_esquissez_crop.png",
      img_concretisez: "innovinc_concretisez_crop.png",
      title_esquissez: "2e place",
      title_concretisez: "Bourse du FICSUM"
    }
  }
  render() {
    return (
      <div>
        <row>
          <div class="container-fluid prizes">
            <div class="container">
              <h1 className="title">Nos prix</h1>
              <div class="row">
                <div class="col-sm-6 col-lg-4 border rounded shadow prize-container">
                  <div>
                    <Prize prizeImg={this.state.img_explorez} prizeTitle=" " />
                  </div>
                </div>
                <div class="col-sm-6 col-lg-4 border rounded shadow prize-container">
                  <Prize prizeImg={this.state.img_esquissez} prizeTitle={this.state.title_esquissez} />
                </div>
                <div class="col-sm-6 col-lg-4 border rounded shadow prize-container">
                  <Prize prizeImg={this.state.img_concretisez} prizeTitle={this.state.title_concretisez} />
                </div>
              </div>
            </div>
          </div>
        </row>
      </div>
    )
  }
}

export default Prizes
