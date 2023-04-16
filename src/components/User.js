import React from 'react';
import propTypes from 'prop-types';
import { useState } from 'react';
import Usercard from './Usercard';
import LoadingBar from 'react-top-loading-bar';
export default function User(props) {
    const [User, setUser] = useState([]); //initializing user with an array 
    const fetchUser = async () => {
        props.setLoader(25)
        const getResponse = await fetch("https://api.github.com/users");
        props.setLoader(50)
        const Convertjson = await getResponse.json();
        props.setLoader(75)
        setUser(Convertjson)
        props.setLoader(100)
    };


    return (
        <>

            <div className='user'>
                <nav className="navbar">
                    <h3 href="" className='title'>Lets Grow More</h3>
                    <ul>
                        <li>
                            <button className='button' onClick={fetchUser}>Get Users</button>
                        </li>
                    </ul>
                </nav>
                <div className='row' >
                    {
                        User.map((element) => {
                            return <div className="col-md-3" key={element.id}>
                                <Usercard title={element.login} id={element.id} imageurl={element.avatar_url} reposurl={element.url} />
                            </div>
                        })
                    }

                </div >
            </div>
        </>
    );



}
