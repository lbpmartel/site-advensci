import React, { Component } from 'react'

class Social extends Component {
   render() {
      return (
         <div>
            <section id="social" className="container">
               <div class="row">
                  <div class="col-lg-6">
                     <a className="twitter-timeline" href="https://twitter.com/advensci" data-tweet-limit="1">Tweets d'Advensci</a>
                  </div>

                  <hr />

                  <div className="col-lg-6">
                     <iframe className="facebook-timeline" src="http://www.facebook.com/plugins/likebox.php?href=http%3A%2F%2Fwww.facebook.com%2Fadvensci.inc&width=600&colorscheme=light&show_faces=true&border_color&stream=true&header=true&height=435" scrolling="yes" frameborder="0" allowtransparency="true"></iframe>
                  </div>
               </div>
            </section >
         </div >
      )
   }
}

export default Social;