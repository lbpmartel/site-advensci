import React from 'react';

class Member extends React.Component {

    render() {
        return (
            <div>
                <img class="member-img" src={"./img/" + this.props.memberImg} alt=" "/>
                <h3 class="name">{this.props.memberName}</h3>
                <h4 class="titre">{this.props.memberTitle}</h4>
            </div>
        );
    }
}

export default Member;
