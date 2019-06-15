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
            <form action="https://advensci.us19.list-manage.com/subscribe/post?u=1459cc2a9b4681a90674626f5&amp;id=5e9ddda649" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
               <div id="mc_embed_signup_scroll">
                  <div class="indicates-required"><span class="asterisk">*</span> champs requis</div>
                  <div class="mc-field-group">
                     <label for="mce-FNAME">Prénom  <span class="asterisk">*</span>
                     </label>
                     <input type="text" name="FNAME" class="required" id="mce-FNAME" />
                  </div>
                  <div class="mc-field-group">
                     <label for="mce-LNAME">Nom  <span class="asterisk">*</span>
                     </label>
                     <input type="text" name="LNAME" class="required" id="mce-LNAME" />
                  </div>
                  <div class="mc-field-group size1of2">
                     <label for="mce-MMERGE5-month">Date de naissance <span class="asterisk">*</span></label>
                     <div class="datefield">
                        <span class="subfield dayfield">
                           <input class="datepart " type="text" pattern="[0-9]*" placeholder="DD" size="2" maxlength="2" name="MMERGE5[day]" id="mce-MMERGE5-day" />
                        </span> /
                        <span class="subfield monthfield">
                           <input class="datepart " type="text" pattern="[0-9]*" placeholder="MM" size="2" maxlength="2" name="MMERGE5[month]" id="mce-MMERGE5-month" />
                        </span> /
		                     <span class="subfield yearfield">
                           <input class="datepart " type="text" pattern="[0-9]*" placeholder="YYYY" size="4" maxlength="4" name="MMERGE5[year]" id="mce-MMERGE5-year" />
                        </span>
                        <span class="small-meta nowrap">( dd / mm / yyyy )</span>
                     </div>
                  </div>
                  <div class="mc-field-group">
                     <label for="mce-EMAIL">Adresse courriel <span class="asterisk">*</span>
                     </label>
                     <input type="email" name="EMAIL" class="required email" id="mce-EMAIL" />
                  </div>
                  <div class="mc-field-group">
                     <label for="mce-MMERGE4">Genre <span class="asterisk">*</span></label>
                     <select name="MMERGE4" class="" id="mce-MMERGE4">
                        <option value="Homme">Homme</option>
                        <option value="Femme">Femme</option>
                        <option value="Non-binaire">Non-binaire</option>
                        <option value="Autre">Autre</option>
                     </select>
                  </div>
                  <div class="mc-field-group">
                     <label for="mce-MMERGE6">Pays de résidence <span class="asterisk">*</span></label>
                     <input type="text" name="MMERGE6" class="" id="mce-MMERGE6" />
                  </div>
                  <div class="mc-field-group">
                     <label for="mce-MMERGE7">Ville de résidence <span class="asterisk">*</span></label>
                     <input type="text" name="MMERGE7" class="" id="mce-MMERGE7" />
                  </div>
                  <div class="mc-field-group">
                     <label for="mce-MMERGE8">Quartier ou arrondissement </label>
                     <input type="text" name="MMERGE8" class="" id="mce-MMERGE8" />
                  </div>
                  <div class="mc-field-group">
                     <label for="mce-MMERGE3">Y a-t-il d'autres informations que vous voudriez </label>
                     <input type="text" name="MMERGE3" class="" id="mce-MMERGE3" />
                  </div>
                  <div class="mc-field-group input-group">
                     <ul><li><input type="checkbox" value="1" name="group[2915][1]" id="mce-group[2915]-2915-0" />
                        <label for="mce-group[2915]-2915-0">
                           Je souhaite être contacté lorsqu’une étude correspond à mon profil même avant le lancement de l’application.
                        </label></li>
                     </ul>
                  </div>
                  <div id="mce-responses" class="clear">
                     <div class="response" id="mce-error-response" ></div>
                     <div class="response" id="mce-success-response" ></div>
                  </div>
                  <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true"><input type="text" name="b_1459cc2a9b4681a90674626f5_5e9ddda649" tabindex="-1" value="" />
                  </div>
                  <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button" />
                  </div>
               </div>
            </form>
         </div>
      )
   }
}

export default ParticipantForm;
