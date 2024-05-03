import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import BookingTable from "../BookingTable/BookingTable";



const Bookings = () => {

    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([])

    const url = `http://localhost:5000/bookings?email=${user?.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setBookings(data)
            })


    }, [])



    const handleDelete = id => {

        const proceed = confirm("are you sure , you want to delete")
        if (proceed) {
            fetch(`http://localhost:5000/bookings/${id}` ,{
                method : "DELETE"
               
            })
            .then(res => res.json())
            .then(data =>{

                console.log(data);

                if(data.deletedCount > 0){

                
                    alert("delete successfully")

                    const remaining = bookings.filter(booking =>booking._id !== id)
                    console.log(remaining);
                    setBookings(remaining)
                }
            })
        }


    }


    return (
        <div>
            <h2>booking {bookings.length}</h2>

            <div className="">
               
      
                      {
                        bookings.map(booking =><BookingTable key={booking._id} booking={booking} handleDelete={handleDelete}></BookingTable>)
                      }
                     
               
                
              
            </div>


        </div>
    );
};

export default Bookings;