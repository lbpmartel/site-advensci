import React from 'react';

class Member extends React.Component {

    render() {
        return (
            <div class="member">
                <img class="member-img" src={"./img/" + this.props.memberImg} alt=" "/>
                <h3 class="name">{this.props.memberName}</h3>
            </div>
        );
    }
}

export default Member;
