import React from 'react';

class Translation extends React.Component {

    render() {
        return <div>{this.props.texts[`${this.props.language}`][`${this.props.textKey}`]}</div>
    }
}

export default Translation;
