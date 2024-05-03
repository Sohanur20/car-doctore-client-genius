/* eslint-disable react/prop-types */


const BookingTable = ({ booking, handleDelete, handleConform }) => {
    // console.log(booking);

    const { _id, customerName, email, date, service, price, img, status } = booking



    return (
        <table className="table">
            <tr> <th>


                <button onClick={() => handleDelete(_id)} className="btn btn-circle btn-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>


            </th>
                <td>
                    <div className="flex items-center gap-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={img} />
                            </div>
                        </div>

                    </div>
                </td>
                <td>
                    {customerName}
                    <br />
                    <span className="badge badge-ghost badge-sm">{email}</span>
                </td>
                <td>$ {price}</td>
                <td> {service}</td>
                <td>{date}</td>
                <th>
                    {
                        status === 'confirm' ? <span className="font-bold text-blue-800">confirmed</span> :
                        
                    <button onClick={() => handleConform(_id)} className="btn btn-ghost btn-xs">Confirm</button>

                    }
                </th>
            </tr>
        </table>
    );
};

export default BookingTable;