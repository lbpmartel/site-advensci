import React, { Component } from 'react'

class ParticipantForm extends Component {
  render() {
    return (
      <div>
        <form>
        <div class="form-group">
            <label>Nom</label>
            <input type="text" class="form-control" id="nameInput" placeholder="Nom" />
          </div>
          <div class="form-group">
            <label>Email</label>
            <input type="email" class="form-control" id="emailInput" placeholder="email@email.com" />
          </div>
        </form>
      </div>
    )
  }
}

export default ParticipantForm;
