import React, { Component } from 'react'

class ResearcherForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lNameValue: '',
            fNameValue: '',
            emailValue: '',
            phone1Value: '',
            phone2Value: '',
            phone3Value: '',
            functionValue: '',
            uniLabValue: '',
            nbParticipantsValue: '',
            inclCriteriaValue: '',
            exclCriteriaValue: ''
        };
    }
    render() {
        return (

            <div id="mc_embed_signup">
                <form action="https://advensci.us19.list-manage.com/subscribe/post?u=1459cc2a9b4681a90674626f5&amp;id=eddcba6822" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                    <div id="mc_embed_signup_scroll">
                        <input type="hidden" name="u" value="1459cc2a9b4681a90674626f5" />
                        <input type="hidden" name="id" value="eddcba6822" />

                        <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
                        <div class="mc-field-group">
                            <label for="mce-FNAME">Prénom  <span class="asterisk">*</span>
                            </label>
                            <input type="text" value={this.state.fNameValue} name="FNAME" class="required" id="mce-FNAME" onChange={(e) => { this.setState({ fNameValue: e.target.value }); }} />
                        </div>
                        <div class="mc-field-group">
                            <label for="mce-LNAME">Nom  <span class="asterisk">*</span>
                            </label>
                            <input type="text" value={this.state.lNameValue} name="LNAME" class="required" id="mce-LNAME" onChange={(e) => { this.setState({ lNameValue: e.target.value }); }} />
                        </div>
                        <div class="mc-field-group">
                            <label for="mce-EMAIL">Adresse courriel  <span class="asterisk">*</span>
                            </label>
                            <input type="email" value={this.state.emailValue} name="EMAIL" class="required email" id="mce-EMAIL" onChange={(e) => { this.setState({ emailValue: e.target.value }); }} />
                        </div>
                        <div class="mc-field-group size1of2">
                            <label for="mce-MMERGE6">Numéro de téléphone </label>
                            <div class="phonefield phonefield-us">
                                (<span class="phonearea"><input class="phonepart " pattern="[0-9]*" id="mce-MMERGE6-area" name="MMERGE6[area]" maxlength="3" size="3" value={this.state.phone1Value} type="text" onChange={(e) => { this.setState({ phone1Value: e.target.value }); }} /></span>)
                                 <span class="phonedetail1"><input class="phonepart " pattern="[0-9]*" id="mce-MMERGE6-detail1" name="MMERGE6[detail1]" maxlength="3" size="3" value={this.state.phone2Value} type="text" onChange={(e) => { this.setState({ phone2Value: e.target.value }); }} /></span> -
                                 <span class="phonedetail2"><input class="phonepart " pattern="[0-9]*" id="mce-MMERGE6-detail2" name="MMERGE6[detail2]" maxlength="4" size="4" value={this.state.phone3Value} type="text" onChange={(e) => { this.setState({ phone3Value: e.target.value }); }} /></span>
                                <span class="small-meta nowrap">(###) ###-####</span>
                            </div>
                        </div><div class="mc-field-group">
                            <label for="mce-FUNCTION">Fonction </label>
                            <select name="FUNCTION" class="" id="mce-FUNCTION" onChange={(e) => { this.setState({ functionValue: e.target.value }); }}>
                                <option value={this.state.functionValue}></option>
                                <option value="Étudiant au premier cycle">Étudiant au premier cycle</option>
                                <option value="Étudiant à la maîtrise">Étudiant à la maîtrise</option>
                                <option value="Étudiant au doctorat">Étudiant au doctorat</option>
                                <option value="Auxiliaire de recheche">Auxiliaire de recheche</option>
                                <option value="Professeur">Professeur</option>
                                <option value="Autre">Autre</option>

                            </select>
                        </div>
                        <div class="mc-field-group">
                            <label for="mce-UNI_LAB">Université / Laboratoire </label>
                            <input type="text" value={this.state.uniLabValue} name="UNI_LAB" class="" id="mce-UNI_LAB" onChange={(e) => { this.setState({ uniLabValue: e.target.value }); }} />
                        </div>
                        <div class="mc-field-group size1of2">
                            <label for="mce-MMERGE5">De combien de participants pensez-vous avoir besoin? </label>
                            <input type="number" name="MMERGE5" class="" value={this.state.nbParticipantsValue} id="mce-MMERGE5" onChange={(e) => { this.setState({ nbParticipantsValue: e.target.value }); }} />
                        </div>
                        <div class="mc-field-group">
                            <label for="mce-MMERGE7">Critères d'inclusion (âge et type de population que vous voulez étudier) </label>
                            <input type="text" value={this.state.inclCriteriaValue} name="MMERGE7" class="" id="mce-MMERGE7" onChange={(e) => { this.setState({ inclCriteriaValue: e.target.value }); }} />
                        </div>
                        <div class="mc-field-group">
                            <label for="mce-MMERGE8">Critères d'exclusion </label>
                            <input type="text" value={this.state.exclCriteriaValue} name="MMERGE8" class="" id="mce-MMERGE8" onChange={(e) => { this.setState({ exclCriteriaValue: e.target.value }); }} />
                        </div>
                        <div id="mce-responses" class="clear">
                            <div className="response" id="mce-error-response" ></div>
                            <div className="response" id="mce-success-response" ></div>
                        </div>
                        <div className="anti-bot" aria-hidden="true"><input type="text" name="b_1459cc2a9b4681a90674626f5_eddcba6822" tabindex="-1" value="" /></div>
                        <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button" /></div>
                    </div>
                </form>
            </div>


            /*<div>
                    <link href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css" rel="stylesheet" type="text/css" />
                    <div id="mc_embed_signup">
                        <form action="https://advensci.us19.list-manage.com/subscribe/post?u=1459cc2a9b4681a90674626f5&amp;id=eddcba6822" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate >
                            <input type="hidden" name="u" value="1459cc2a9b4681a90674626f5" />
                            <input type="hidden" name="id" value="eddcba6822" />
                            <div id="mc_embed_signup_scroll">
                                <div class="indicates-required"><span class="asterisk">*</span> indicates required </div>
                                <div class="mc-field-group">
                                    <label for="mce-FNAME">Prénom  <span class="asterisk">*</span></label>
                                    <input
                                        type="text"
                                        value={this.state.fNameValue}
                                        name="FNAME"
                                        class="required"
                                        id="mce-FNAME"
                                        onChange={(e) => { this.setState({ fNameValue: e.target.value }); }}
                                    />
                                </div>
                                <div class="mc-field-group">
                                    <label for="mce-LNAME">Nom  <span class="asterisk">*</span></label>
                                    <input
                                        type="text"
                                        value={this.state.lNameValue}
                                        name="LNAME"
                                        class="required"
                                        id="mce-LNAME"
                                        onChange={(e) => { this.setState({ lNameValue: e.target.value }); }}
                                    />
                                </div>
                                <div class="mc-field-group">
                                    <label for="mce-EMAIL">Adresse courriel  <span class="asterisk">*</span></label>
                                    <input
                                        type="email"
                                        value={this.state.emailValue}
                                        name="EMAIL"
                                        class="required email"
                                        id="mce-EMAIL"
                                        onChange={(e) => { this.setState({ emailValue: e.target.value }); }}
                                    />
                                </div>
                                <div class="mc-field-group">
                                    <label for="mce-FUNCTION">Fonction </label>
                                    <select name="FUNCTION" class="" id="mce-FUNCTION">
                                        <option value=""></option>
                                        <option value="Étudiant au premier cycle">Étudiant au premier cycle</option>
                                        <option value="Étudiant à la maîtrise">Étudiant à la maîtrise</option>
                                        <option value="Étudiant au doctorat">Étudiant au doctorat</option>
                                        <option value="Auxiliaire de recheche">Auxiliaire de recheche</option>
                                        <option value="Professeur">Professeur</option>
                                        <option value="Autre">Autre</option>
                                    </select>
                                </div>
                                <div class="mc-field-group">
                                    <label for="mce-UNI_LAB">Université / Laboratoire </label>
                                    <input
                                        type="text"
                                        value={this.state.uniLabValue}
                                        name="UNI_LAB"
                                        class=""
                                        id="mce-UNI_LAB"
                                        onChange={(e) => { this.setState({ uniLabValue: e.target.value }); }}
                                    />
                                </div>
                                <div id="mce-responses" class="clear">
                                    <div class="response" id="mce-error-response"></div>
                                    <div class="response" id="mce-success-response"></div>
                                </div>
                                <div id="mailchimp-antibot" aria-hidden="true" class="d-none">
                                    <input type="text" name="b_1459cc2a9b4681a90674626f5_eddcba6822" tabindex="-1" value="" />
                                </div>
                                <div class="clear d-flex">
                                    <input type="submit" value="Inscrivez-moi" name="subscribe" id="mc-embedded-subscribe" class="button text-uppercase" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>*/
        )
    }
}

export default ResearcherForm;
