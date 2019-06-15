import React from 'react';

class Sponsors extends React.Component {

    render() {
        return (
            <div className="container-fluid team" id="sponsors">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h2 className="text-center">Avec le soutien de...</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 d-flex">
                            <div className="mr-auto">
                                <img className="sponsor-img" src="/img/sponsor1.png" alt=" " />
                            </div>
                        </div>
                        <div className="col-lg-6 d-flex">
                            <div className="ml-auto">
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
