import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './League.css'

const League = ({ league }) => {
    const { idLeague, strLeague, strSport } = league;
    const [leagueDetails, setLeagueDetails] = useState({});
    
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setLeagueDetails(data.leagues[0]);
            })
    }, [idLeague])

    return (
        <div className='col-md-6 col-lg-4 col-xl-3 col-sm-12 '>
            <div className="card card-bg mb-4">
                <div className="d-flex logo-container">
                    <img src={leagueDetails.strBadge || leagueDetails.strLogo} className="card-img-top" alt="Logo" />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{strLeague}</h5>
                    <p className="card-text">Sports type: {strSport}</p>
                    <Link to={`league-details/${idLeague}`} className="btn btn-custom">Explore <FontAwesomeIcon className="right-arrow" icon={faArrowRight} /></Link>
                </div>
            </div>
        </div>
    );
};

export default League;