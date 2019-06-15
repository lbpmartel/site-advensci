import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <div className="jumbotron jumbotron-fluid background-header">
                <div className="container header">
                    <div className="row">
                        <div className="col-lg-6 header-text">
                            <div className="header-rectangle">
                                <h3>Advensci</h3>
                                <p>Une application réunissant les participants motivés et les chercheurs.</p>
                            </div>
                        </div>
                        <div className="header-photo col-lg-6 d-flex">
                            <img src="/img/nexus_resized.png" alt=""></img>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
