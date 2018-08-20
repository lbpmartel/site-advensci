import React from 'react';

class Member extends React.Component {

  render() {
    return (
      <div class="container-fluid member">
        <div class="container">
            <div class="member">
              
              <img class="img-member" src={"./img/" + this.props.memberImg}/>
              <div class="container-fluid">
                <h3 class="h3 name-member">{this.props.memberName}</h3>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Member;
