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


    render() {
        return (
            <div id="mc_embed_signup">
                <h3>Si vous désirez être participant, vous serez les premiers à avoir accès à l’application dès son lancement.</h3>
                <form action="https://advensci.us19.list-manage.com/subscribe/post?u=1459cc2a9b4681a90674626f5&amp;id=5e9ddda649" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                    <input type="hidden" name="u" value="1459cc2a9b4681a90674626f5" />
                    <input type="hidden" name="id" value="5e9ddda649" />
                    <div id="mc_embed_signup_scroll">
                        <div className="indicates-required"><span className="asterisk">*</span> indicates required</div>
                        <div className="mc-field-group">
                            <label for="mce-FNAME">Prénom  <span className="asterisk">*</span>
                            </label>
                            <input
                                type="text"
                                value={this.state.fNameValue}
                                name="FNAME"
                                className="required"
                                id="mce-FNAME"
                                onChange={(e) => { this.setState({ fNameValue: e.target.value }); }} />
                        </div>
                        <div className="mc-field-group">
                            <label for="mce-LNAME">Nom  <span className="asterisk">*</span>
                            </label>
                            <input
                                type="text"
                                value={this.state.lNameValue}
                                name="LNAME"
                                className="required"
                                id="mce-LNAME"
                                onChange={(e) => { this.setState({ lNameValue: e.target.value }); }} /> />
                        </div>
                        <div className="mc-field-group size1of2">
                            <label for="mce-MMERGE5-month">Date de naissance </label>
                            <div className="datefield">
                                <span className="subfield monthfield">
                                    <input
                                        className="datepart "
                                        type="text"
                                        pattern="[0-9]*"
                                        value={this.state.ddBdayValue}
                                        placeholder="MM"
                                        size="2"
                                        maxlength="2"
                                        name="MMERGE5[month]"
                                        id="mce-MMERGE5-month"
                                        onChange={(e) => { this.setState({ ddBdayValue: e.target.value }); }}
                                    />
                                </span>
                                <span className="subfield dayfield">
                                    <input
                                        className="datepart "
                                        type="text"
                                        pattern="[0-9]*"
                                        value={this.state.mmBdayValue}
                                        placeholder="DD"
                                        size="2"
                                        maxlength="2"
                                        name="MMERGE5[day]"
                                        id="mce-MMERGE5-day"
                                        onChange={(e) => { this.setState({ mmBdayValue: e.target.value }); }}
                                    />
                                </span>
                                <span className="subfield yearfield">
                                    <input
                                        className="datepart "
                                        type="text"
                                        pattern="[0-9]*"
                                        value={this.state.yyyyBdayValue}
                                        placeholder="YYYY"
                                        size="4"
                                        maxlength="4"
                                        name="MMERGE5[year]"
                                        id="mce-MMERGE5-year"
                                        onChange={(e) => { this.setState({ yyyyBdayValue: e.target.value }); }}
                                    />
                                </span>
                                <span className="small-meta nowrap">( mm / dd / yyyy )</span>
                            </div>
                        </div>
                        <div className="mc-field-group">
                            <label for="mce-EMAIL">Courriel  <span className="asterisk">*</span>
                            </label>
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
                            <label for="mce-MMERGE4">Genre </label>
                            <select
                                name="MMERGE4"
                                className=""
                                id="mce-MMERGE4"
                                value={this.state.genderValue}
                                onChange={(e) => { this.setState({ genderValue: e.target.value }); }}>
                                <option value=""></option>
                                <option value="Homme">Homme</option>
                                <option value="Femme">Femme</option>
                                <option value="Non-binaire">Non-binaire</option>
                                <option value="Autre">Autre</option>
                            </select>
                        </div>
                        <div className="mc-field-group">
                            <label for="mce-MMERGE3">Y a-t-il d'autres informations que vous souhaitez partager avec nous? </label>
                            <input type="text" value={this.state.otherInfoValue} placeholder="Y a-t-il d’autres informations que vous souhaitez partager?" name="MMERGE3" className="" id="mce-MMERGE3"
                                onChange={(e) => { this.setState({ otherInfoValue: e.target.value }); }} />
                        </div>
                        <div id="mce-responses" className="clear">
                            <div className="response" id="mce-error-response" ></div>
                            <div className="response" id="mce-success-response" ></div>
                        </div>
                        <div aria-hidden="true"><input type="text" name="b_1459cc2a9b4681a90674626f5_5e9ddda649" tabindex="-1" value="" /></div>
                        <div className="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" /></div>
                    </div>
                </form>
            </div>






            /*<div>
                <h3>Si vous désirez être participant, vous serez les premiers à avoir accès à l’application dès son lancement.</h3>
                <link href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css" rel="stylesheet" type="text/css" />
                <div id="mc_embed_signup">
                    <form action="https://advensci.us19.list-manage.com/subscribe/post?u=1459cc2a9b4681a90674626f5&amp;id=5e9ddda649" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                        <input type="hidden" name="u" value="1459cc2a9b4681a90674626f5" />
                        <input type="hidden" name="id" value="5e9ddda649" />
                        <div id="mc_embed_signup_scroll">

                            <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
                            <div class="mc-field-group">
                                <label for="mce-FNAME">Prénom  <span class="asterisk">*</span>
                                </label>
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
                                <label for="mce-LNAME">Nom  <span class="asterisk">*</span>
                                </label>
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
                                <label for="mce-EMAIL">Adresse courriel  <span class="asterisk">*</span>
                                </label>
                                <input
                                    type="email"
                                    value={this.state.emailValue}
                                    name="EMAIL"
                                    class="required email"
                                    id="mce-EMAIL"
                                    onChange={(e) => { this.setState({ emailValue: e.target.value }); }}
                                />
                            </div>
                            <div id="mce-responses" class="clear">
                                <div class="response" id="mce-error-response"></div>
                                <div class="response" id="mce-success-response"></div>
                            </div>
                            <div id="mailchimp-antibot" aria-hidden="true" class="d-none">
                                <input type="text" name="b_1459cc2a9b4681a90674626f5_5e9ddda649" tabindex="-1" value="" />
                            </div>
                            <div class="clear">
                                <input type="submit" value="Inscrivez-moi" name="subscribe" id="mc-embedded-subscribe" class="button text-uppercase" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>*/
        )
    }
}

export default ParticipantForm;
