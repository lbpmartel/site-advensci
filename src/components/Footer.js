import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <footer className="text-center pt-5 my-5">
                <h3>{this.props.translator("footer_rights", true)} Advensci {(new Date().getFullYear())}</h3>
            </footer>
        );
    }
}

export default Footer;
