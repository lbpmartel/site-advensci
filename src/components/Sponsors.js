import React from 'react';

class Sponsors extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="container-fluid team" id="sponsors">
                <div class="container">
                    <h2 class="text-center">Sponsors</h2>
                    <div class="row">
                        <div class="col-lg-6">
                            <img class="sponsor-img" src="/img/sponsor1.png" alt=" " />
                        </div>
                        <div class="col-lg-6">
                            <img class="sponsor-img" src="/img/sponsor2.jpg" alt=" " />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Sponsors;
