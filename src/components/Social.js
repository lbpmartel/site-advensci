import React, { Component } from 'react'

class Social extends Component {
    render() {
        return (
            <div>
                <section id="social" className="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <a className="twitter-timeline" href="https://twitter.com/TwitterDev?ref_src=twsrc%5Etfw" data-tweet-limit="1">Tweets d'Advensci</a>
                        </div>
                        <hr />
                    </div>
                </section >
            </div >
        )
    }
}

export default Social;