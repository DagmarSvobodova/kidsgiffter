import React, { useState, useEffect } from 'react';

export default function Register(props) {

    const [{email, name, address, password, password_confirmation}, setValues] = useState({
        email: '',
        name: '',
        address: '',
        password: '',
        password_confirmation: ''
    })

    


    const handleSubmit = async (event) => {

        event.preventDefault();

    

        let request_data = {email, name, address, password, password_confirmation};
        let response = await fetch('api/newuser', {
            method: 'POST',
            body: JSON.stringify(request_data),
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
            }
        });
        const response_data = await response.json();

        if (Math.floor(response.status / 100) == 2) { 
            location.href = '/auth'; 
            
        }
    }

    const handleChange = (event) => {
        const allowed_names = ['name', 'email', 'address', 'password', 'password_confirmation'],
              name  = event.target.name,
              value = event.target.value

        if (-1 !== allowed_names.indexOf(name)) {
            setValues(prev_values => {
                return ({...prev_values,
                    [name]: value
                });
            });
        }
    }

    return (
        <form action="/register" method="post" onSubmit={ handleSubmit }>

            <label htmlFor="">Name:</label><br />
            <input type="text" name="name" value={ name } onChange={ handleChange } />
            <br />

            <label htmlFor="">Email:</label><br />
            <input type="email" name="email" value={ email } onChange={ handleChange } />
            <br />

            <label htmlFor="">Address:</label><br />
            <input type="textarea" name="address" value={ address } onChange={ handleChange } />
            <br />

            <label htmlFor="">Password:</label><br />
            <input type="password" name="password" value={ password } onChange={ handleChange } />
            <br />

            <label htmlFor="">Confirm password:</label><br />
            <input type="password" name="password_confirmation" value={ password_confirmation } onChange={ handleChange } />
            <br />

            <button>Register</button>

        </form>
    );
}