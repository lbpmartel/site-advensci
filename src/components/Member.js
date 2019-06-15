import React from 'react';

class Member extends React.Component {

    render() {
        return (
            <div id="member">
                <img className="member-img img-fluid" src={"./img/" + this.props.memberImg} alt=" " />
                <div className="overlay">
                    <h3 className="name">{this.props.memberName}</h3>
                    <h4 className="titre">{this.props.memberTitle}</h4>
                    <div className="text pr-3">{this.props.memberDesc}</div>
                </div>
                <div className="bottom-left">
                    <h3 className="name">{this.props.memberName}</h3>
                    <h4 className="titre">{this.props.memberTitle}</h4>
                </div>
            </div>
        );
    }
}

export default Member;
