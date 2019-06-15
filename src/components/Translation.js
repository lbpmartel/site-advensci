import React from 'react';

class Translation extends React.Component {

    render() {
        return (
            <div>{this.props.texts[`${this.props.langage}`][`${this.props.cle}`]}</div>
        )
    }
}

export default Translation;
