import React, { useEffect, useState } from 'react';
import League from '../League/League';
import './Home.css'
const Home = () => {
    const [leagues, setLeagues] = useState([]);

    useEffect(() => {
        const url = 'https://www.thesportsdb.com/api/v1/json/1/all_leagues.php';
        fetch(url)
            .then(res => res.json())
            .then(data => {
                const topFiftyLeagues = data.leagues.slice(0, 50);
                setLeagues(topFiftyLeagues);
            })
    }, [])

    return (
        <div>
            <header className="d-flex align-items-center justify-content-center text-white">
                <h1 className="text-capitalize text-center">legendary sports leagues</h1>
            </header>
            <section className='p-3 leagues-section bg-custom'>
                <div className="container-fluid">
                    <div className="row mt-3">
                        {
                            leagues.map(league => <League league={league} key={league.idLeague}/>)
                        }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;