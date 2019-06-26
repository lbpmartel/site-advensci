import React from 'react';

class Sponsors extends React.Component {

    render() {
        return (
            <div className="container-fluid team" id="sponsors">
                <div className="container">
                    <div className="row">
                        <div className="col text-center">
                            <h2>{this.props.translator('sponsors_title')}</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 d-flex pt-lg-5 pl-lg-5 mt-4">
                            <div className="mr-auto pl-lg-5">
                                <img className="sponsor-img" src="/img/sponsor1.png" alt=" " />
                            </div>
                        </div>
                        <div className="col-lg-6 d-flex pt-lg-5 pr-lg-5 mt-4">
                            <div className="ml-auto pr-lg-5">
                                <img className="sponsor-img" src="/img/sponsor2.jpg" alt=" " />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Sponsors;
