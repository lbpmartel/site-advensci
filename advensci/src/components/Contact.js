import React from 'react';
import ParticipantForm from './ParticipantForm';

class Contact extends React.Component {
  render() {
    return (
      <div class="container-fluid">
        <div class="container">
          <div class="row">
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
                  BLA BLA BLA
                  </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
