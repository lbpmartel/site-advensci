import React, { Component } from 'react'

class ParticipantForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fNameValue: '',
            lNameValue: '',
            emailValue: '',
        };
    }


    render() {
        return (
            <div>
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
                            <div id="mailchimp-antibot" aria-hidden="true">
                                <input type="text" name="b_1459cc2a9b4681a90674626f5_5e9ddda649" tabindex="-1" value="" />
                            </div>
                            <div class="clear">
                                <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default ParticipantForm;
