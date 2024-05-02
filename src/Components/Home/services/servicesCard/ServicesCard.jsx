/* eslint-disable react/prop-types */
import { GrLinkNext } from "react-icons/gr";
import { Link } from "react-router-dom";

const ServicesCard = ({card}) => {

// console.log(card);

const {_id,title ,img, price} = card
console.log(card);


    return (
        <div>
            <div  className="card w-96 h-[400px] bg-slate-200 shadow-xl mb-5">
                <figure className="px-10 pt-10">
                  <img src={img} alt="" className="rounded-xl" />
                </figure>
                <div className="card-body ">
                  <h2 className="card-title font-bold">{title}</h2>
                
                  <div className="card-actions">
                  <p className="text-[#FF3811] uppercase"> price : $ {price}</p>
               <Link to={`/booking/${_id}`}>
               <button className="btn bg-[#FF3811] text-white"><GrLinkNext /></button>
               </Link>
                  </div>
                </div>
              </div>
        </div>
    );
};

export default ServicesCard;