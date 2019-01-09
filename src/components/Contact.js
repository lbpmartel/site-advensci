import React from 'react';

import ParticipantForm from './ParticipantForm';
import ResearcherForm from './ResearcherForm';

class Contact extends React.Component {

  render() {
    return (
      <div class="container-fluid contact" id="contact">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 d-flex flex-column justify-content-center">
              <div class="text m-auto">
                <h2>Intéressé ?</h2>
                <h3>Inscrivez-vous aujourd'hui !</h3>
              </div>
            </div>
            <div class="col-lg-8">
              <nav class="nav nav-tabs col-12">
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                  <li class="nav-item">
                    <a class="nav-link active" id="participant-tab" data-toggle="tab" href="#participant" role="tab" aria-controls="participant" aria-selected="true">Participant</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" id="chercheur-tab" data-toggle="tab" href="#chercheur" role="tab" aria-controls="chercheur" aria-selected="false">Chercheur</a>
                  </li>
                </ul>
                <div class="tab-content col-12" id="myTabContent">
                  <div class="tab-pane fade show active" id="participant" role="tabpanel" aria-labelledby="participant-tab">
                    <ParticipantForm />
                  </div>
                  <div class="tab-pane fade" id="chercheur" role="tabpanel" aria-labelledby="chercheur-tab">
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
