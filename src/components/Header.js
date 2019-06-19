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
                                <p>
                                    {this.props.translator("header_description")}
                                </p>
                            </div>
                        </div>
                        <div className="header-photo col-lg-6 d-flex">
                            {
                                this.props.language == "fr" &&
                                <img src="/img/nexus_resized.png" alt=""></img>
                            }
                            {
                                this.props.language == "en" && //TODO Changer le path pour le phone en anglais
                                <img src="/img/nexus_resized.png" alt=""></img>
                            }
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default Header;
