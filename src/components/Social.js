import React, { Component } from 'react'

class Social extends Component {
   render() {
      return (
         <div>
            <section id="social" className="container">
               <div className="row">
                  <div className="col-lg-6">
                     <a className="twitter-timeline" style={{maxWidth: '500px'}} href="https://twitter.com/advensci" data-tweet-limit="1">Tweets d'Advensci</a>
                  </div>

                  <div className="col-lg-6 d-flex">
                     <div className="ml-auto">
                        <iframe title="facebook-timeline"
                           className="facebook-timeline" 
                           src="https://www.facebook.com/plugins/page.php?href=href=https%3A%2F%2Fwww.facebook.com%2Fadvensci.inc&tabs=timeline&width=500&height=600&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false&appId" scrolling="yes" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                     </div>
                  </div>
               </div>
            </section >
         </div >
      )
   }
}

export default Social;