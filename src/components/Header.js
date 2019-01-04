import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <div class="jumbotron jumbotron-fluid background-header">
                <div class="container header">
                    <div class="row">
                        <div class="col-lg-8 header-text">
                            <div class="header-rectangle">
                                <h3>Advensci</h3>
                                <p>Une application réunissant les participants motivés et les chercheurs.</p>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <img src="/img/phone.png" alt=""></img>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
