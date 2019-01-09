import React from 'react';

class Member extends React.Component {

    render() {
        return (
            <div id="member">
                <img class="member-img img-fluid" src={"./img/" + this.props.memberImg} alt=" " />
                <div class="overlay">
                    <h3 class="name">{this.props.memberName}</h3>
                    <h4 class="titre">{this.props.memberTitle}</h4>
                    <div class="text pr-3">{this.props.memberDesc}</div>
                </div>
                <div class="bottom-left">
                    <h3 class="name">{this.props.memberName}</h3>
                    <h4 class="titre">{this.props.memberTitle}</h4>
                </div>
            </div>
        );
    }
}

export default Member;
