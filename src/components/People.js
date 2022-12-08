import React, { useState, useEffect } from 'react';
export default function PeopleDisplay() {
    const [People, setPeopleArray] = useState(null);
    const [error, setError] = useState(null);
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        fetch("https://swapi.dev/api/people/4")
            .then((response) => {
                response.json()
                    .then(res => {
                        console.log(res);
                        setPeopleArray(res);
                        setLoaded(true);
                    })
                    .catch(err => {
                        console.log(err);
                        setError(err);
                        setLoaded(true);
                    });
            })
    }, [URL]);
    if (!loaded) {
        return ( < div > ... < /div>);
        }
        else if (error) {
            return ( < div > { error } < /div>)
            }
            else {
                return ( <
                    div className = "card text-center mx-auto m-3" >
                    <
                    div className = 'card-header' >
                    <
                    h3 > { People.name } < /h3> < /
                    div > <
                    div className = 'card-body' >
                    <
                    p className = "card-text" > Gender: { People.gender } < /p> <
                    p className = "card-text" > Height: { People.height } < /p> <
                    p className = "card-text" > Weight: { People.mass } < /p> <
                    p className = "card-text" > Hair color: { People.hair_color } < /p> <
                    p className = "card-text" > Skin color: { People.skin_color } < /p> <
                    p className = "card-text" > Eye color: { People.eye_color } < /p> <
                    p className = "card-text" > Birth year: { People.birth_year } < /p> < /
                    div > <
                    /div>
                )
            }
        }