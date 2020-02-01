import React from 'react';
import User from '../../components/user';

const AuthindexPage = (props) => {
    return (
        <div>
            <h1>Auth index page : {props.appName}</h1>
            <User name='Abhinav' age='21' />
        </div>
    )

};

AuthindexPage.getInitialProps = context => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ appName: 'Auth App' });
        }, 1000)
    })
    return promise;
}

export default AuthindexPage;