import React from 'react';
import ParticipantForm from './ParticipantForm';

class Contact extends React.Component {
  render() {
    return (
      <div class="container-fluid">
        <div class="container">
        <div class="row">
          <div class="col-12 m-auto">
              <ParticipantForm />
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default Contact;
