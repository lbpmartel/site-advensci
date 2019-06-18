import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <footer className="text-center pt-5 my-5">
                <h3>Tous droits réservés Advensci {(new Date().getFullYear())}</h3>
            </footer>
        );
    }
}

export default Footer;
