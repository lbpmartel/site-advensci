import React from 'react';

class Prize extends React.Component {

  render() {
    return (
      <div className="prize row">
        <div className="col">
          <h3>{this.props.prizeTitle}</h3>
          <img src={"./img/" + this.props.prizeImg} alt=" " />
        </div>
      </div>
    );
  }
}

export default Prize;
