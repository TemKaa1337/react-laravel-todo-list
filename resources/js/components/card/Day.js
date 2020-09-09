import React from 'react';
import ReactDOM from 'react-dom';

import Job from '../../components/card/Job';

import '../../../css/card/card.css';

function getJobCards() {
    let jobDayCards = [];

    for (let i = 0; i < 7; i ++) {
        jobDayCards.push(
            <Job key = {i} />
        );
    }

    return jobDayCards;
}

function Day(props) {

    return (
        <div className = "day-card">
            <div className = 'day-card-inner'>
                <a>day number {props.dayNumber}</a>
                { getJobCards() }
            </div>
        </div>
    );
}

export default Day;
