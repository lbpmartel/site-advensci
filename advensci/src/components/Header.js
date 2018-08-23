import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <div class="jumbotron jumbotron-fluid background-header">
                <div class="container">
                    <div class="row">
                        <h1 class="display-3 text-center"><img src="/img/logo.png" class="img-fluid" />dvensci</h1>
                        <p class="lead"></p>
                    </div>
                </div>
                <div class="container-fluid">
                    <div class="row citation">
                        <div class="col-12 d-flex">
                            <h4 class="m-auto">Participer à l'avancement de la recherche,<br />une étude à la fois</h4>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
