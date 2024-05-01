/* eslint-disable react/prop-types */
import { GrLinkNext } from "react-icons/gr";

const ServicesCard = ({card}) => {

console.log(card);

const {title ,img, price} = card


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
                    <button className="btn bg-[#FF3811] text-white"><GrLinkNext /></button>
                  </div>
                </div>
              </div>
        </div>
    );
};

export default ServicesCard;