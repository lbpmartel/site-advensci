import React from 'react';

class Sponsors extends React.Component {

    render() {
        return (
            <div class="container-fluid team" id="sponsors">
                <div class="container">
                    <div className="row">
                        <div className="col">
                            <h2 class="text-center">Avec le soutien de...</h2>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-6 d-flex">
                            <div className="mr-auto">
                                <img class="sponsor-img" src="/img/sponsor1.png" alt=" " />
                            </div>
                        </div>
                        <div class="col-lg-6 d-flex">
                            <div className="ml-auto">
                                <img class="sponsor-img" src="/img/sponsor2.jpg" alt=" " />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Sponsors;
