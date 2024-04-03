import React from 'react'
import { useState } from 'react';
import "./form.css"

export default function Form() {

    function handleSubmit(e) {
        e.preventDefault();
        alert("Welcome "+user.name)
        console.log(user);
    }
    
    const [user, setUser] = useState({
        name : "",
        password : "",
        phone : "",
        email : "",
    });
    function handleChange(e) {
        setUser({
            ...user,[e.target.id]:e.target.value
        })
    }
    



    return (
        <>
            <div className='formbox'>
                <form action="" onSubmit={handleSubmit} autoComplete='off'>
                    <h1>SignUp Form</h1>
                    <label htmlFor="name"  >Username : </label>
                    <input type="text" className='box' id='name' onChange={handleChange} /><br /><br />
                    <label htmlFor="password">Password : </label>
                    <input type="password" className='box' id="password" onChange={handleChange} /><br /><br />
                    <label htmlFor="phone">Phone No. : </label>
                    <input type="text" className='box' id="phone" onChange={handleChange} /><br /><br />
                    <label htmlFor="email">Email ID : </label>
                    <input type="email" className='box' id='email' onChange={handleChange} /><br /><br /><br />
                    <button>Login</button>
                </form>
            </div>
        </>
    )
}
