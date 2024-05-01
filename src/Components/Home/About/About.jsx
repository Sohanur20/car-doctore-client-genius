/* eslint-disable react/no-unescaped-entities */
import parson from '../../../assets/images/about_us/person.jpg'; 
import parts from '../../../assets/images/about_us/parts.jpg'; 

const About = () => {
    return (
        <div >
            <div className="hero  bg-base-200 my-20">
                <div className="hero-content flex-col lg:flex-row">
                 <div className='lg:w-1/2 relative'>
                 <img src={parson} className=" w-3/4 rounded-lg shadow-2xl" />
                 <img src={parts} className="absolute w-1/2 h-60 right-5 top-40 rounded-lg shadow-2xl  border-8 " />
                 </div>
                    <div className='lg:w-1/2 p-10'>
                        <h1 className="text-xl font-bold text-[#FF3811]">About Us</h1>
                        <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                        <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        <p className="py-6">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        <button className="btn btn-primary border-none bg-[#FF3811]">Get More Info</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;