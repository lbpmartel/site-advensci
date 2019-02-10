import React, { Component } from 'react'

class Social extends Component {
    render() {
        return (
            <div>
                <section id="social" className="container-fluid">
                    <div class="row">
                        <div class="col-lg-6">
                        <script async src="https://platform.twitter.com/widgets.js"></script>
                        <a class="twitter-timeline" href="https://twitter.com/TwitterDev">Tweet</a>
                        </div>
                        <hr />
                    </div>
                </section >
            </div >
        )
    }
}

export default Social;
