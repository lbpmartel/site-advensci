import React from 'react';

class Advantages extends React.Component {
  render() {
    return (
      <div name="advantages" id="advantages" className="container-fluid advantages">
        <div className="container">
          <div className="row title">
            <div className="col-lg-12 text-center m-auto">
              <h3>{this.props.translator('advantages_title')}</h3>
              <h2 className="title">{this.props.translator('advantages_subtitle')}</h2>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="advantage etudes col">
              <div>
                <img className="advantage-img" src="/img/ico3.png" alt=""></img>
                <p className="text-left text-advantage">{this.props.translator('advantages_img1')}</p>
              </div>
            </div>
            <div className="advantage rayon col pl-lg-5 d-flex">
              <div className="mx-auto">
                <img className="advantage-img" src="/img/ico4.png" alt=""></img>
                <p className="text-left text-advantage">{this.props.translator('advantages_img2')}</p>
              </div>
            </div>
            <div className="advantage compensation col pl-lg-5 d-flex">
              <div className="ml-auto">
                <img className="advantage-img" src="/img/ico1.png" alt=""></img>
                <p className="text-left text-advantage">{this.props.translator('advantages_img3')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Advantages;
