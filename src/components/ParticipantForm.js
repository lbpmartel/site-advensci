import React, { Component } from 'react'

class ParticipantForm extends Component {
   constructor(props) {
      super(props);
      this.state = {
         fNameValue: '',
         lNameValue: '',
         emailValue: '',
         ddBdayValue: '',
         mmBdayValue: '',
         yyyyBdayValue: '',
         genderValue: '',
         otherInfoValue: ''
      };
   }

   onFieldChange = (event) => {
      if (event.target.type === 'checkbox') {
         this.setState({
            [event.target.name]: event.target.checked
         });
      } else {
         this.setState({
            [event.target.name]: event.target.value
         });
      }
   };

   render() {
      return (
         <div id="mc_embed_signup">
            <h3>Si vous désirez être participant, vous serez les premiers à avoir accès à l’application dès son lancement.</h3>
            <form action="https://advensci.us19.list-manage.com/subscribe/post?u=1459cc2a9b4681a90674626f5&amp;id=5e9ddda649" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
               <div id="mc_embed_signup_scroll">
                  <div className="indicates-required"><span className="asterisk">*</span> champs requis</div>
                  <div className="mc-field-group">
                     <label htmlFor="mce-FNAME">Prénom  <span className="asterisk">*</span>
                     </label>
                     <input type="text" name="FNAME" className="required" id="mce-FNAME" />
                  </div>
                  <div className="mc-field-group">
                     <label htmlFor="mce-LNAME">Nom  <span className="asterisk">*</span>
                     </label>
                     <input type="text" name="LNAME" className="required" id="mce-LNAME" />
                  </div>
                  <div className="mc-field-group size1of2">
                     <label htmlFor="mce-MMERGE5-month">Date de naissance <span className="asterisk">*</span></label>
                     <div className="datefield">
                        <span className="subfield dayfield">
                           <input className="datepart " type="text" pattern="[0-9]*" placeholder="DD" size="2" maxLength="2" name="MMERGE5[day]" id="mce-MMERGE5-day" />
                        </span> /
                        <span className="subfield monthfield">
                           <input className="datepart " type="text" pattern="[0-9]*" placeholder="MM" size="2" maxLength="2" name="MMERGE5[month]" id="mce-MMERGE5-month" />
                        </span> /
		                     <span className="subfield yearfield">
                           <input className="datepart " type="text" pattern="[0-9]*" placeholder="YYYY" size="4" maxLength="4" name="MMERGE5[year]" id="mce-MMERGE5-year" />
                        </span>
                        <span className="small-meta nowrap">( dd / mm / yyyy )</span>
                     </div>
                  </div>
                  <div className="mc-field-group">
                     <label htmlFor="mce-EMAIL">Adresse courriel  <span className="asterisk">*</span>
                     </label>
                     <input type="email" name="EMAIL" className="required email" id="mce-EMAIL" />
                  </div>
                  <div className="mc-field-group">
                     <label htmlFor="mce-MMERGE4">Genre auquel vous vous identifiez le plus<span className="asterisk">*</span></label>
                     <select name="MMERGE4" className="" id="mce-MMERGE4">
                        <option value="Homme">Homme</option>
                        <option value="Femme">Femme</option>
                        <option value="Non-binaire">Non-binaire</option>
                        <option value="Autre">Autre</option>
                        <option value="Préfère ne pas spécifier">Préfère ne pas spécifier</option>
                     </select>
                  </div>
                  <div className="mc-field-group">
                     <label htmlFor="mce-MMERGE6">Pays <span className="asterisk">*</span></label>
                     <input type="text" name="MMERGE6" className="" id="mce-MMERGE6" />
                  </div>
                  <div className="mc-field-group">
                     <label htmlFor="mce-MMERGE7">Ville <span className="asterisk">*</span></label>
                     <input type="text" name="MMERGE7" className="" id="mce-MMERGE7" />
                  </div>
                  <div className="mc-field-group">
                     <label htmlFor="mce-MMERGE8">Quartier ou arrondissement </label>
                     <input type="text" name="MMERGE8" className="" id="mce-MMERGE8" />
                  </div>
                  <div className="mc-field-group">
                     <label htmlFor="mce-MMERGE3">Autres informations</label>
                     <input type="text" name="MMERGE3" className="" id="mce-MMERGE3" placeholder="Y a-t-il d'autres informations que vous voudriez partager avec nous ?" />
                  </div>
                  <div className="mc-field-group input-group">
                     <ul><li><input type="checkbox" defaultValue="1" name="group[2915][1]" id="mce-group[2915]-2915-0" />
                        <label htmlFor="mce-group[2915]-2915-0">
                           Je souhaite être contacté lorsqu’une étude correspond à mon profil même avant le lancement de l’application.
                        </label></li>
                     </ul>
                  </div>
                  <div id="mce-responses" className="clear">
                     <div className="response" id="mce-error-response" ></div>
                     <div className="response" id="mce-success-response" ></div>
                  </div>
                  <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true"><input type="text" name="b_1459cc2a9b4681a90674626f5_5e9ddda649" tabIndex="-1" defaultValue="" />
                  </div>
                  <div className="clear"><input type="submit" value="Inscrivez-vous" name="subscribe" id="mc-embedded-subscribe" className="button" />
                  </div>
               </div>
            </form>
         </div>
      )
   }
}

export default ParticipantForm;
