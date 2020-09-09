import React from 'react';
import ReactDOM from 'react-dom';

// react components
import Header from './header/Header';
import Footer from './footer/Footer';
import Login from './auth/Login';
import Register from './auth/Register';
import Day from './card/Day';

// page styles
import '../../css/main.css';

function getDayCards() {
    let dayCards = [];

    for (let i = 0; i < 7; i ++) {
        dayCards.push(
            <Day key = {i} dayNumber = {i} />
        );
    }

    return dayCards;
}

function Main() {
    return (
        <div className = "app-container">
            <Header isAuthenticated = {false} />
            <div className = "content">
                { getDayCards() }
            </div>
            <Footer />
        </div>
    );
}

export default Main;

if (document.getElementById('app')) {
    ReactDOM.render(<Main />, document.getElementById('app'));
}
