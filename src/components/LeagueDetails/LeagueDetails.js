import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './LeagueDetails.css';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faCalendarCheck } from '@fortawesome/free-regular-svg-icons';
import { faGlobe, faMars, faTrophy } from '@fortawesome/free-solid-svg-icons';
import male from '../../images/male.png';
import female from '../../images/female.png';
import { faFacebookF, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const LeagueDetails = () => {
    const { leagueId } = useParams();
    const [league, setLeague] = useState({ strGender: '' });
    const [spinner, setSpinner] = useState(true);
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${leagueId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setLeague(data.leagues[0]);
                setSpinner(false);
            })
    }, [leagueId])

    return (
        <div>
            <header className="d-flex align-items-center justify-content-center text-white">
                <div className="banner-image">
                    <img src={league.strLogo || league.strBadge} alt="" />
                </div>
            </header>
            <section className='p-3 leagues-section bg-custom'>
                <div className="container">
                    {
                        spinner ? <div style={{ minHeight: '600px' }} class="d-flex justify-content-center align-items-center">
                            <div class="spinner-border" role="status">
                                <span class="visually-hidden"></span>
                            </div>
                        </div> :

                            <div className="">
                                <div className="row league-detail p-3 mt-3 mx-0">
                                    <div className="col-lg-7">
                                        <h2 className="mb-4">{league.strLeague}</h2>
                                        <p><strong><FontAwesomeIcon icon={faCalendarCheck} className="mr-2" /> Founded:</strong> {moment(league.intFormedYear).format('YYYY')} </p>
                                        <p><strong><FontAwesomeIcon icon={faCalendarAlt} className="mr-2" /> First Event:</strong> {moment(league.dateFirstEvent).format('LL')} </p>
                                        <p><strong><FontAwesomeIcon icon={faGlobe} className="mr-2" /> Country:</strong> {league.strCountry} </p>
                                        <p><strong><FontAwesomeIcon icon={faTrophy} className="mr-2" /> Sport Type:</strong> {league.strSport} </p>
                                        <p><strong><FontAwesomeIcon icon={faMars} className="mr-2" /> Gender:</strong> {league.strGender}</p>
                                    </div>
                                    <div className="col-lg-5 d-flex justify-content-center align-items-center">
                                        <div className="league-img ">
                                            {
                                                <img src={league.strGender.toLowerCase() === 'male' ? male : league.strGender.toLowerCase() === 'female' ? female : ''} alt="league" />
                                            }
                                        </div>
                                    </div>
                                </div>

                                <p className="mt-4 mx-0">{league.strDescriptionEN}</p>
                                <p className="mt-4 mx-0">{league.strDescriptionFR}</p>
                                <div className="d-flex justify-content-center">
                                    {league.strTwitter && <a href={`https://${league.strTwitter}`} target="_blank" rel="noreferrer" className="social-icon icon-twitter"><FontAwesomeIcon className="" icon={faTwitter} /></a>}
                                    {league.strFacebook && <a href={`https://${league.strFacebook}`} target="_blank" rel="noreferrer" className="social-icon icon-facebook"><FontAwesomeIcon className="" icon={faFacebookF} /></a>}
                                    {league.strWebsite && <a href={`https://${league.strWebsite}`} target="_blank" rel="noreferrer" className="social-icon icon-website"><FontAwesomeIcon className="" icon={faGlobe} /></a>}
                                    {league.strYoutube && <a href={`https://${league.strYoutube}`} target="_blank" rel="noreferrer" className="social-icon icon-youtube"><FontAwesomeIcon className="" icon={faYoutube} /></a>}
                                </div>
                                <div className="d-flex justify-content-center mt-3">
                                    <Link to="/" className="btn btn-custom">Back</Link>
                                </div>
                            </div>
                    }
                </div>
            </section>
        </div>
    );
};

export default LeagueDetails;