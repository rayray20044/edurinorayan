import React, { useState } from 'react';
import './coupon.css';
import stuffToBuy from '../component/coupon/stufftobuy.png';

export function Coupon() {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email submitted:', email);
    };

    return (
        <div className='container4'>
            <div className='squarecontainer'>

                <h6>Write your email below to claim  20% off your purchase</h6>

                <div className='couponcontainer'>
                    <h4>20%</h4>
                    <img src={stuffToBuy} alt="Buy" className="stufftobuy-image"/>
                </div>
                <form onSubmit={handleSubmit} className='email-form'>
                    <input
                        type='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Enter your email'
                        required
                        className='email-input'
                    />
                    <button type='submit' className='email-submit'>Submit</button>
                </form>
            </div>
        </div>
    );
}

