import React, { useState, useEffect } from 'react';
import RemainingDays from './subcomponents/RemainingDays';

const DaysToGo = ({ data = { } }) => {
    
    const { weddingDate, title } = data;
    const [isExpired, setIsExpired] = useState(false);
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
   
    useEffect(() => {
        
        const weddingTime = new Date(weddingDate).getTime();
       
        const remainingDays = setInterval(() => {
            
            const todayTime = new Date().getTime();
            const  remaining = weddingTime - todayTime;
            const day = Math.floor(remaining / (1000 * 60 * 60 * 24));
            const hour = Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minute = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
            const second = Math.floor((remaining % (1000 * 60)) / 1000);

            if (days !== day) {
                setDays(day);
            }

            if (hours !== hour) {
                setHours(hour);
            }

            if (minutes !== minute) {
                setMinutes(minute);
            }

            if (seconds !== second) {
                setSeconds(second);
            }

            if (remaining < 0) {
                clearInterval(remainingDays);
                setIsExpired(true);
            }
        }, 1000);

        return () => {
            clearInterval(remainingDays);
        }

    }, [days, hours, minutes, seconds]);

    return (
        <section className="section counter-area center-text">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="heading">
                            <div className='animate__animated animate__flipInY animate__infinite'>
                                <h2 className="title">{ title }</h2>
                            </div>
                            <span className="heading-bottom"><i className="fas fa-star-of-life"></i></span>
                        </div>
                    </div>

                    <div className="col-sm-2"></div>
                    <div className="col-sm-8">

                        <div className="remaining-time">
                            { isExpired
                                ? <div>Yay....</div>
                                :
                                <div id="clock">
                                    <RemainingDays dateTime = {days} labels = "Days"/>
                                    <RemainingDays dateTime = {hours} labels = "Hours"/>
                                    <RemainingDays dateTime = {minutes} labels = "Minutes"/>
                                    <RemainingDays dateTime = {seconds} labels = "Seconds"/>
                                </div>
                            }
                        </div>
                    </div>

                </div>
            </div>
        </section>
        );
}

export default DaysToGo;


