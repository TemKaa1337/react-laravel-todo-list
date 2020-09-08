import React from 'react';
import ReactDOM from 'react-dom';

import Header from './header/Header';
import Footer from './footer/Footer';
import Login from './login/Login';
import Register from './registration/Register';

function Main() {
    return (
        <div className="container">
            <Header />
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Main App Component</div>

                        <div className="card-body">I'm an example component!</div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Main;

if (document.getElementById('app')) {
    ReactDOM.render(<Main />, document.getElementById('app'));
}
