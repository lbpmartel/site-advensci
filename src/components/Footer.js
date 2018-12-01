import React, { Component } from 'react'
import '../Footer.css';

class Footer extends Component {
    render() {
        return (
            <div>
                <section id="footer">
                    <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
                            <ul class="list-unstyled list-inline social text-center">
                                <li class="list-inline-item"><a href="https://www.facebook.com/advensci.inc/"><i class="fa fa-facebook"></i></a></li>
                                <li class="list-inline-item"><a href="mailto:info@advensci.ca"><i class="fa fa-envelope"></i></a></li>
                            </ul>
                        </div>
                        <hr />
                    </div>
                    <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
                            <p>Tous droits réservés <i>Advensci</i></p>
                        </div>
                        <hr />
                    </div>
                </section >
            </div >
        )
    }
}

export default Footer;
