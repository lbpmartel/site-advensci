import React from 'react';

class Mission extends React.Component {
  render() {
    return (
      <div name="mission" id="mission" className="container-fluid mission px-0">
        <div className="container">
          <div className="row">
            <div className="participants col-lg-6">
              <h3>
                {this.props.translator('mission_participants')}
              </h3>
              <h2 className="text-white">
                {this.props.translator('mission_participants_title')}
              </h2>
              <p>
                {this.props.translator('mission_participants_desc')}
              </p>
              <a className="btn" href="#contact">
                {this.props.translator('mission_subscribe_button')}
              </a>
            </div>
            <div className="chercheurs col-lg-6">
              <h3>
                {this.props.translator('mission_researchers')}
              </h3>
              <h2 className="text-white">
                {this.props.translator('mission_researchers_title')}
              </h2>
              <p>
                {this.props.translator('mission_researchers_desc')}
              </p>
              <a className="btn" href="#contact">
                {this.props.translator('mission_subscribe_button')}
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Mission;
