import React from 'react';

import ParticipantForm from './ParticipantForm';
import ResearcherForm from './ResearcherForm';

class Contact extends React.Component {

  render() {
    return (
      <div className="container-fluid contact" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 title d-flex flex-column justify-content-center">
              <div className="text mx-auto mb-auto px-lg-5">
                <h2>Intéressé ?</h2>
                <h3>Inscrivez-vous aujourd'hui !</h3>
              </div>
            </div>
            <div className="col-lg-9 contact-forms">
              <nav className="nav nav-tabs container">
                <ul className="nav nav-tabs row w-100 d-flex py-5" id="myTab" role="tablist">
                  <li className="nav-item col-lg-6 ml-auto text-center">
                    <a className="nav-link active" id="participant-tab" data-toggle="tab" href="#participant" role="tab" aria-controls="participant" aria-selected="true">Participants</a>
                  </li>
                  <li className="nav-item col-lg-6 mr-auto text-center">
                    <a className="nav-link" id="chercheur-tab" data-toggle="tab" href="#chercheur" role="tab" aria-controls="chercheur" aria-selected="false">Chercheurs</a>
                  </li>
                </ul>
                <div className="tab-content col-12" id="myTabContent">
                  <div className="tab-pane fade show active" id="participant" role="tabpanel" aria-labelledby="participant-tab">
                    <ParticipantForm />
                  </div>
                  <div className="tab-pane fade" id="chercheur" role="tabpanel" aria-labelledby="chercheur-tab">
                    <ResearcherForm />
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
