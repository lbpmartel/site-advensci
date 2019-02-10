import React, { Component } from 'react'

class Social extends Component {
    render() {
        return (
            <div>
                <section id="social" className="container">
                    <div class="row">
                        <div class="col-lg-6 col-sm-12 d-flex mx-auto">
                            <a className="twitter-timeline" href="https://twitter.com/TwitterDev?ref_src=twsrc%5Etfw" data-tweet-limit="1" data-width="500">Tweets d'Advensci</a>
                        </div>

                        <hr />

                        <div className="col-lg-6 col-sm-12 mx-auto d-flex" id="facebook_div">
                            <div className="fb-page facebook-timeline mx-auto" data-href="http://www.facebook.com/advensci.inc" data-width="500" data-height="630" data-tabs="timeline" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="false"></div>
                        </div>
                    </div>
                </section >
            </div >
        )
    }
}

export default Social;