import React, { Component } from 'react'

class ParticipantForm extends Component {
    render() {
        return (
            <div>
                <div id="mc_embed_signup">
                    <form action="https://advensci.us19.list-manage.com/subscribe/post?u=1459cc2a9b4681a90674626f5&amp;id=5e9ddda649" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                    <div id="mc_embed_signup_scroll">
                        <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
                        <div class="mc-field-group">
                            <label for="mce-EMAIL">Email Address  <span class="asterisk">*</span></label>
                            <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL" />
                        </div>
                        <div class="mc-field-group">
                            <label for="mce-FNAME">First Name </label>
                            <input type="text" value="" name="FNAME" class="" id="mce-FNAME" />
                        </div>
                        <div class="mc-field-group">
                            <label for="mce-LNAME">Last Name </label>
                            <input type="text" value="" name="LNAME" class="" id="mce-LNAME" />
                        </div>
                        <div class="mc-field-group size1of2">
                            <label for="mce-BIRTHDAY-month">Birthday </label>
                            <div class="datefield">
                                <span class="subfield monthfield"><input class="birthday " type="text" pattern="[0-9]*" value="" placeholder="MM" size="2" maxlength="2" name="BIRTHDAY[month]" id="mce-BIRTHDAY-month" /></span> /
                                <span class="subfield dayfield"><input class="birthday " type="text" pattern="[0-9]*" value="" placeholder="DD" size="2" maxlength="2" name="BIRTHDAY[day]" id="mce-BIRTHDAY-day" /></span>
                                <span class="small-meta nowrap">( mm / dd )</span>
                            </div>
                        </div>
                        <div id="mce-responses" class="clear">
                            <div class="d-none response" id="mce-error-response"></div>
                            <div class="d-none response" id="mce-success-response"></div>
                        </div>
                        <div class="d-none mailchiant" aria-hidden="true"><input type="text" name="b_1459cc2a9b4681a90674626f5_5e9ddda649" tabindex="-1" value="" /></div>
                        <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button" /></div>
                    </div>
                </form>
            </div>
        </div>
    )
}
}

export default ParticipantForm;
