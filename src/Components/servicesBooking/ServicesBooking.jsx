/* eslint-disable no-unused-vars */

import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const ServicesBooking = () => {


    const services = useLoaderData();

    const { title, _id, price } = services;
    const { user } = useContext(AuthContext)


    const handleBookingService = e => {

        e.preventDefault()
        const form = e.target
        const name = form.name.value;
        const date = form.date.value;
        const email = user.email;


        const order = {
            customerName: name,
            email,
            date,
            service: _id,
            price: price



        }
        console.log(order);


    }


    return (
        <div>
            <div >
                <h2>booking car services </h2>
                <h2>title : {title}</h2>


                <div className="bg-gray-900 w-full shadow rounded p-8 sm:p-12 ">

                    <form onSubmit={handleBookingService} action="" method="post">
                        <div className="md:flex items-center mt-12">
                            <div className="w-full md:w-1/2 flex flex-col">
                                <label className="font-semibold leading-none text-gray-300">First Name</label>
                                <input type="text" name="name" placeholder="first name" className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded" />
                            </div>
                            <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                                <label className="font-semibold leading-none text-gray-300">Date</label>
                                <input type="date" name="date" defaultValue={Date} placeholder="last_name" className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded" />
                            </div>
                        </div>
                        <div className="md:flex items-center mt-12">
                            <div className="w-full md:w-1/2 flex flex-col">
                                <label className="font-semibold leading-none text-gray-300">Due to Amount</label>
                                <input type="number" placeholder="" name="amount" defaultValue={"$" + price} className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded" />
                            </div>
                            <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                                <label className="font-semibold leading-none text-gray-300">Your Email</label>
                                <input type="email" name="email" disabled defaultValue={user?.email} placeholder="email" className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded" />
                            </div>
                        </div>

                        <div>
                            <div className="w-full flex flex-col mt-8">
                                <label className="font-semibold leading-none text-gray-300">Your Message</label>
                                <textarea type="text" placeholder="Your Message" className="h-40 text-base leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-800 border-0 rounded"></textarea>
                            </div>
                        </div>
                        <div className="flex items-center justify-center w-full">
                            <button className="mt-9 btn btn-block border-none font-semibold leading-none text-white py-4 px-10 bg-[#FF3811]">
                                Order Confirm
                            </button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default ServicesBooking;