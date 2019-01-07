import React from 'react';

class Member extends React.Component {

    render() {
        return (
            <div id="member" class="container">
                <img class="member-img" src={"./img/" + this.props.memberImg} alt=" " />
                <div class="overlay">
                    <div class="text">Description du membre</div>
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
