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
                <form action="https://advensci.us19.list-manage.com/subscribe/post?u=1459cc2a9b4681a90674626f5&amp;id=eddcba6822"
                    method="post"
                    id="mc-embedded-subscribe-form"
                    name="mc-embedded-subscribe-form"
                    className="validate"
                    target="_blank"
                    noValidate>
                    <div id="mc_embed_signup_scroll">
                        <div className="indicates-required"><span className="asterisk">*</span> champs requis</div>
                        <div className="mc-field-group">
                            <label htmlFor="mce-FNAME">Prénom  <span className="asterisk">*</span>
                            </label>
                            <input
                                type="text"

                                name="FNAME"
                                className="required"
                                id="mce-FNAME"
                                onChange={this.onFieldChange} />
                        </div>
                        <div className="mc-field-group">
                            <label htmlFor="mce-LNAME">Nom  <span className="asterisk">*</span>
                            </label>
                            <input type="text" name="LNAME" className="required" id="mce-LNAME" onChange={this.onFieldChange} />
                        </div>
                        <div className="mc-field-group">
                            <label htmlFor="mce-EMAIL">Adresse courriel  <span className="asterisk">*</span>
                            </label>
                            <input type="email" name="EMAIL" className="required email" id="mce-EMAIL" onChange={this.onFieldChange} />
                        </div>
                        <div className="mc-field-group size1of2">
                            <label htmlFor="mce-MMERGE6">Numéro de téléphone </label>
                            <div className="phonefield phonefield-us">
                                (<span className="phonearea">
                                    <input className="phonepart " pattern="[0-9]*" id="mce-MMERGE6-area" name="MMERGE6[area]" maxLength="3" size="3" type="text" onChange={this.onFieldChange} /></span>)
                              <span className="phonedetail1">
                                    <input className="phonepart " pattern="[0-9]*" id="mce-MMERGE6-detail1" name="MMERGE6[detail1]" maxLength="3" size="3" type="text" onChange={this.onFieldChange} /></span> -
                              <span className="phonedetail2">
                                    <input className="phonepart " pattern="[0-9]*" id="mce-MMERGE6-detail2" name="MMERGE6[detail2]" maxLength="4" size="4" type="text" onChange={this.onFieldChange} /></span>
                                <span className="small-meta nowrap">(###) ###-####</span>
                            </div>
                        </div><div className="mc-field-group">
                            <label htmlFor="mce-FUNCTION">Fonction </label>
                            <select name="FUNCTION" className="" id="mce-FUNCTION">
                                <option value="Étudiant au premier cycle">Étudiant au premier cycle</option>
                                <option value="Étudiant à la maîtrise">Étudiant à la maîtrise</option>
                                <option value="Étudiant au doctorat">Étudiant au doctorat</option>
                                <option value="Auxiliaire de recheche">Auxiliaire de recheche</option>
                                <option value="Professeur">Professeur</option>
                                <option value="Autre">Autre</option>

                            </select>
                        </div>
                        <div className="mc-field-group">
                            <label htmlFor="mce-MMERGE9">Si autre, précisez </label>
                            <input type="text" name="MMERGE9" className="" id="mce-MMERGE9" onChange={this.onFieldChange} />
                        </div>
                        <div className="mc-field-group">
                            <label htmlFor="mce-UNI_LAB">Université / Laboratoire </label>
                            <input type="text" name="UNI_LAB" className="" id="mce-UNI_LAB" onChange={this.onFieldChange} />
                        </div>
                        <div className="mc-field-group size1of2">
                            <label htmlFor="mce-MMERGE5">De combien de participants pensez-vous avoir besoin? </label>
                            <input type="number" name="MMERGE5" className="" id="mce-MMERGE5" onChange={this.onFieldChange} />
                        </div>
                        <div className="mc-field-group">
                            <label htmlFor="mce-MMERGE7">Critères d'inclusion (âge et type de population que vous voulez étudier) </label>
                            <input type="text" name="MMERGE7" className="" id="mce-MMERGE7" onChange={this.onFieldChange} />
                        </div>
                        <div className="mc-field-group">
                            <label htmlFor="mce-MMERGE8">Critères d'exclusion </label>
                            <input type="text" name="MMERGE8" className="" id="mce-MMERGE8" onChange={this.onFieldChange} />
                        </div>
                        <div id="mce-responses" className="clear">
                            <div className="response" id="mce-error-response" ></div>
                            <div className="response" id="mce-success-response" ></div>
                        </div>
                        <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
                            <input type="text" name="b_1459cc2a9b4681a90674626f5_eddcba6822" tabIndex="-1" onChange={this.onFieldChange} />
                        </div>
                        <div className="clear">
                            <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" onChange={this.onFieldChange} />
                        </div>
                    </div>
                </form>
            </div>

            /*
            <div id="mc_embed_signup">
                <form action="https://advensci.us19.list-manage.com/subscribe/post?u=1459cc2a9b4681a90674626f5&amp;id=eddcba6822" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
                    <div id="mc_embed_signup_scroll">
                        <input type="hidden" name="u" value="1459cc2a9b4681a90674626f5" />
                        <input type="hidden" name="id" value="eddcba6822" />

                        <div className="indicates-required"><span className="asterisk">*</span> indicates required</div>
                        <div className="mc-field-group">
                            <label htmlFor="mce-FNAME">Prénom  <span className="asterisk">*</span>
                            </label>
                            <input type="text" value={this.state.fNameValue} name="FNAME" className="required" id="mce-FNAME" onChange={(e) => { this.setState({ fNameValue: e.target.value }); }} />
                        </div>
                        <div className="mc-field-group">
                            <label htmlFor="mce-LNAME">Nom  <span className="asterisk">*</span>
                            </label>
                            <input type="text" value={this.state.lNameValue} name="LNAME" className="required" id="mce-LNAME" onChange={(e) => { this.setState({ lNameValue: e.target.value }); }} />
                        </div>
                        <div className="mc-field-group">
                            <label htmlFor="mce-EMAIL">Adresse courriel  <span className="asterisk">*</span>
                            </label>
                            <input type="email" value={this.state.emailValue} name="EMAIL" className="required email" id="mce-EMAIL" onChange={(e) => { this.setState({ emailValue: e.target.value }); }} />
                        </div>
                        <div className="mc-field-group size1of2">
                            <label htmlFor="mce-MMERGE6">Numéro de téléphone </label>
                            <div className="phonefield phonefield-us">
                                (<span className="phonearea"><input className="phonepart " pattern="[0-9]*" id="mce-MMERGE6-area" name="MMERGE6[area]" maxLength="3" size="3" value={this.state.phone1Value} type="text" onChange={(e) => { this.setState({ phone1Value: e.target.value }); }} /></span>)
                                 <span className="phonedetail1"><input className="phonepart " pattern="[0-9]*" id="mce-MMERGE6-detail1" name="MMERGE6[detail1]" maxLength="3" size="3" value={this.state.phone2Value} type="text" onChange={(e) => { this.setState({ phone2Value: e.target.value }); }} /></span> -
                                 <span className="phonedetail2"><input className="phonepart " pattern="[0-9]*" id="mce-MMERGE6-detail2" name="MMERGE6[detail2]" maxLength="4" size="4" value={this.state.phone3Value} type="text" onChange={(e) => { this.setState({ phone3Value: e.target.value }); }} /></span>
                                <span className="small-meta nowrap">(###) ###-####</span>
                            </div>
                        </div><div className="mc-field-group">
                            <label htmlFor="mce-FUNCTION">Fonction </label>
                            <select name="FUNCTION" className="" id="mce-FUNCTION" onChange={(e) => { this.setState({ functionValue: e.target.value }); }}>
                                <option value={this.state.functionValue}></option>
                                <option value="Étudiant au premier cycle">Étudiant au premier cycle</option>
                                <option value="Étudiant à la maîtrise">Étudiant à la maîtrise</option>
                                <option value="Étudiant au doctorat">Étudiant au doctorat</option>
                                <option value="Auxiliaire de recheche">Auxiliaire de recheche</option>
                                <option value="Professeur">Professeur</option>
                                <option value="Autre">Autre</option>

                            </select>
                        </div>
                        <div className="mc-field-group">
                            <label htmlFor="mce-UNI_LAB">Université / Laboratoire </label>
                            <input type="text" value={this.state.uniLabValue} name="UNI_LAB" className="" id="mce-UNI_LAB" onChange={(e) => { this.setState({ uniLabValue: e.target.value }); }} />
                        </div>
                        <div className="mc-field-group size1of2">
                            <label htmlFor="mce-MMERGE5">De combien de participants pensez-vous avoir besoin? </label>
                            <input type="number" name="MMERGE5" className="" value={this.state.nbParticipantsValue} id="mce-MMERGE5" onChange={(e) => { this.setState({ nbParticipantsValue: e.target.value }); }} />
                        </div>
                        <div className="mc-field-group">
                            <label htmlFor="mce-MMERGE7">Critères d'inclusion (âge et type de population que vous voulez étudier) </label>
                            <input type="text" value={this.state.inclCriteriaValue} name="MMERGE7" className="" id="mce-MMERGE7" onChange={(e) => { this.setState({ inclCriteriaValue: e.target.value }); }} />
                        </div>
                        <div className="mc-field-group">
                            <label htmlFor="mce-MMERGE8">Critères d'exclusion </label>
                            <input type="text" value={this.state.exclCriteriaValue} name="MMERGE8" className="" id="mce-MMERGE8" onChange={(e) => { this.setState({ exclCriteriaValue: e.target.value }); }} />
                        </div>
                        <div id="mce-responses" className="clear">
                            <div className="response" id="mce-error-response" ></div>
                            <div className="response" id="mce-success-response" ></div>
                        </div>
                        <div className="anti-bot" aria-hidden="true"><input type="text" name="b_1459cc2a9b4681a90674626f5_eddcba6822" tabIndex="-1" value="" /></div>
                        <div className="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" /></div>
                    </div>
                </form>
            </div> */


            /*<div>
                    <link href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css" rel="stylesheet" type="text/css" />
                    <div id="mc_embed_signup">
                        <form action="https://advensci.us19.list-manage.com/subscribe/post?u=1459cc2a9b4681a90674626f5&amp;id=eddcba6822" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate >
                            <input type="hidden" name="u" value="1459cc2a9b4681a90674626f5" />
                            <input type="hidden" name="id" value="eddcba6822" />
                            <div id="mc_embed_signup_scroll">
                                <div className="indicates-required"><span className="asterisk">*</span> indicates required </div>
                                <div className="mc-field-group">
                                    <label htmlFor="mce-FNAME">Prénom  <span className="asterisk">*</span></label>
                                    <input
                                        type="text"
                                        value={this.state.fNameValue}
                                        name="FNAME"
                                        className="required"
                                        id="mce-FNAME"
                                        onChange={(e) => { this.setState({ fNameValue: e.target.value }); }}
                                    />
                                </div>
                                <div className="mc-field-group">
                                    <label htmlFor="mce-LNAME">Nom  <span className="asterisk">*</span></label>
                                    <input
                                        type="text"
                                        value={this.state.lNameValue}
                                        name="LNAME"
                                        className="required"
                                        id="mce-LNAME"
                                        onChange={(e) => { this.setState({ lNameValue: e.target.value }); }}
                                    />
                                </div>
                                <div className="mc-field-group">
                                    <label htmlFor="mce-EMAIL">Adresse courriel  <span className="asterisk">*</span></label>
                                    <input
                                        type="email"
                                        value={this.state.emailValue}
                                        name="EMAIL"
                                        className="required email"
                                        id="mce-EMAIL"
                                        onChange={(e) => { this.setState({ emailValue: e.target.value }); }}
                                    />
                                </div>
                                <div className="mc-field-group">
                                    <label htmlFor="mce-FUNCTION">Fonction </label>
                                    <select name="FUNCTION" className="" id="mce-FUNCTION">
                                        <option value=""></option>
                                        <option value="Étudiant au premier cycle">Étudiant au premier cycle</option>
                                        <option value="Étudiant à la maîtrise">Étudiant à la maîtrise</option>
                                        <option value="Étudiant au doctorat">Étudiant au doctorat</option>
                                        <option value="Auxiliaire de recheche">Auxiliaire de recheche</option>
                                        <option value="Professeur">Professeur</option>
                                        <option value="Autre">Autre</option>
                                    </select>
                                </div>
                                <div className="mc-field-group">
                                    <label htmlFor="mce-UNI_LAB">Université / Laboratoire </label>
                                    <input
                                        type="text"
                                        value={this.state.uniLabValue}
                                        name="UNI_LAB"
                                        className=""
                                        id="mce-UNI_LAB"
                                        onChange={(e) => { this.setState({ uniLabValue: e.target.value }); }}
                                    />
                                </div>
                                <div id="mce-responses" className="clear">
                                    <div className="response" id="mce-error-response"></div>
                                    <div className="response" id="mce-success-response"></div>
                                </div>
                                <div id="mailchimp-antibot" aria-hidden="true" className="d-none">
                                    <input type="text" name="b_1459cc2a9b4681a90674626f5_eddcba6822" tabIndex="-1" value="" />
                                </div>
                                <div className="clear d-flex">
                                    <input type="submit" value="Inscrivez-moi" name="subscribe" id="mc-embedded-subscribe" className="button text-uppercase" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>*/
        )
    }
}

export default ResearcherForm;
