import React from 'react';

class Prize extends React.Component {

  render() {
    return (
      <div className="prize">
        <h3 className="prize-name text-center">{this.props.prizeTitle}</h3>
        <img className="prize-img" src={"./img/" + this.props.prizeImg} alt=" " />
      </div>
    );
  }
}

export default Prize;
