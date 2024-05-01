/* eslint-disable react/no-unescaped-entities */


import { useEffect, useState } from "react";
import ServicesCard from "./servicesCard/ServicesCard";


const Services = () => {
    const [services, setServices] = useState([]);


    useEffect(() => {

        fetch('/services.json')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setServices(data)
            })


    }, [])


    return (
        <div >
            <div className="text-center space-y-2 my-10">
                <h2 className="text-[#FF3811] text-lg font-bold">Service</h2>
                <h1 className="font-bold text-5xl">Our Service Area</h1>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>



            <div className="grid lg:grid-cols-3 grid-cols-2 gap-5">
                {
                    services.map(card => <ServicesCard key={card._id} card={card}></ServicesCard>)
                }
            </div>



        </div>
    );
};

export default Services;