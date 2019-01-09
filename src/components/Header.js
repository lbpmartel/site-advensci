import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <div class="jumbotron jumbotron-fluid background-header">
                <div class="container header">
                    <div class="row">
                        <div class="col-lg-6 header-text">
                            <div class="header-rectangle">
                                <h3>Advensci</h3>
                                <p>Une application réunissant les participants motivés et les chercheurs.</p>
                            </div>
                        </div>
                        <div class="header-photo col-lg-6 d-flex">
                            <img src="/img/phone.png" alt=""></img>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
