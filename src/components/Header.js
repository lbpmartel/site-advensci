import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <div class="jumbotron jumbotron-fluid background-header">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <h3>Advensci</h3>
                            <p>Une application réunissant les participants motivés et les chercheurs.</p>
                        </div>
                        <div class="col-lg-6">
                            <img src="/img/phone.png"></img>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
