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
                <h3>{this.props.translator('contact_r_subtitle_1', true)} <br /> {this.props.translator('contact_r_subtitle_2', true)}</h3>
                <form action="https://advensci.us19.list-manage.com/subscribe/post?u=1459cc2a9b4681a90674626f5&amp;id=eddcba6822"
                    method="post"
                    id="mc-embedded-subscribe-form"
                    name="mc-embedded-subscribe-form"
                    className="validate"
                    target="_blank"
                    noValidate>
                    <div id="mc_embed_signup_scroll">
                        <div className="indicates-required"><span className="asterisk">*</span> {this.props.translator('contact_required', true)}</div>
                        <div className="mc-field-group">
                            <label htmlFor="mce-FNAME">{this.props.translator('contact_r_fname', true)}  <span className="asterisk">*</span>
                            </label>
                            <input
                                type="text"
                                name="FNAME"
                                className="required"
                                id="mce-FNAME"
                                onChange={this.onFieldChange} />
                        </div>
                        <div className="mc-field-group">
                            <label htmlFor="mce-LNAME">{this.props.translator('contact_r_lname', true)}  <span className="asterisk">*</span>
                            </label>
                            <input type="text" name="LNAME" className="required" id="mce-LNAME" onChange={this.onFieldChange} />
                        </div>
                        <div className="mc-field-group">
                            <label htmlFor="mce-EMAIL">{this.props.translator('contact_r_email', true)}  <span className="asterisk">*</span>
                            </label>
                            <input type="email" name="EMAIL" className="required email" id="mce-EMAIL" onChange={this.onFieldChange} />
                        </div>
                        <div className="mc-field-group size1of2">
                            <label htmlFor="mce-MMERGE6">{this.props.translator('contact_r_phone', true)} <span className="asterisk">*</span></label>
                            <div className="phonefield phonefield-us">
                                (<span className="phonearea">
                                    <input className="phonepart " pattern="[0-9]*" id="mce-MMERGE6-area" name="MMERGE6[area]" maxLength="3" size="3" type="text" onChange={this.onFieldChange} /></span>)
                              <span className="phonedetail1">
                                    <input className="phonepart " pattern="[0-9]*" id="mce-MMERGE6-detail1" name="MMERGE6[detail1]" maxLength="3" size="3" type="text" onChange={this.onFieldChange} /></span> -
                              <span className="phonedetail2">
                                    <input className="phonepart " pattern="[0-9]*" id="mce-MMERGE6-detail2" name="MMERGE6[detail2]" maxLength="4" size="4" type="text" onChange={this.onFieldChange} /></span>
                            </div>
                        </div><div className="mc-field-group">
                            <label htmlFor="mce-FUNCTION">{this.props.translator('contact_r_function', true)} <span className="asterisk">*</span></label>
                            <select name="FUNCTION" className="" id="mce-FUNCTION">
                                <option value="Étudiant au premier cycle">{this.props.translator('contact_r_function_1', true)}</option>
                                <option value="Étudiant à la maîtrise">{this.props.translator('contact_r_function_2', true)}</option>
                                <option value="Étudiant au doctorat">{this.props.translator('contact_r_function_3', true)}</option>
                                <option value="Auxiliaire de recheche">{this.props.translator('contact_r_function_4', true)}</option>
                                <option value="Professeur">{this.props.translator('contact_r_function_5', true)}</option>
                                <option value="Autre">{this.props.translator('contact_r_function_6', true)}</option>

                            </select>
                        </div>
                        <div className="mc-field-group">
                            <label htmlFor="mce-MMERGE9">{this.props.translator('contact_r_other', true)}</label>
                            <input type="text" name="MMERGE9" className="" id="mce-MMERGE9" onChange={this.onFieldChange} />
                        </div>
                        <div className="mc-field-group">
                            <label htmlFor="mce-UNI_LAB">{this.props.translator('contact_r_uni_lab', true)} <span className="asterisk">*</span></label>
                            <input type="text" name="UNI_LAB" className="" id="mce-UNI_LAB" onChange={this.onFieldChange} />
                        </div>
                        <div className="mc-field-group size1of2">
                            <label htmlFor="mce-MMERGE5">{this.props.translator('contact_r_nb_participants', true)} <span className="asterisk">*</span></label>
                            <input type="number" name="MMERGE5" className="" id="mce-MMERGE5" placeholder={this.props.translator('contact_r_nb_participants_placeholder', true)} onChange={this.onFieldChange} />
                        </div>
                        <div className="mc-field-group">
                            <label htmlFor="mce-MMERGE7">{this.props.translator('contact_r_incl_criterias', true)} <span className="asterisk">*</span></label>
                            <input type="text" name="MMERGE7" className="" id="mce-MMERGE7" placeholder={this.props.translator('contact_r_incl_criterias_placeholder', true)} onChange={this.onFieldChange} />
                        </div>
                        <div className="mc-field-group">
                            <label htmlFor="mce-MMERGE8">{this.props.translator('contact_r_excl_criterias', true)} </label>
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
                            <input type="submit" value={this.props.translator('contact_subscribe', true)} name="subscribe" id="mc-embedded-subscribe" className="button" onChange={this.onFieldChange} />
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default ResearcherForm;
