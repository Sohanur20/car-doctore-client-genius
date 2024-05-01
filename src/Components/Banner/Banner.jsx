/* eslint-disable no-unused-vars */
import banner1 from '../../assets/images/banner/5.jpg'
import banner2 from '../../assets/images/banner/2.jpg'
import banner3 from '../../assets/images/banner/3.jpg'
import banner4 from '../../assets/images/banner/4.jpg'


const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={banner1} className="w-full h-[600px]" />

                   

                    <div className="absolute  gap-5 transform -translate-y-1/2 left-5  right-20 bottom-0">

                        <div className='text-white flex justify-around '>
                            <div className='lg:-mt-[300px] '>
                                <h2 className='text-5xl font-bold mb-4'>Affordable <br /> Price For Car <br />Servicing</h2>
                                <p className='mb-4'>There are many variations of passages of  available, but <br />the majority have suffered alteration in some form</p>

                                <div className='flex gap-6'>
                                    <button className='btn btn-outline bg-[#FF3811] text-white border-none w-44 h-14'>Discover More</button>
                                    <button className='btn btn-outline text-white w-44 h-14'>Latest Project</button>
                                </div>
                            </div>


                            <div className='flex gap-6'>
                                <a href="#slide4" className="btn btn-outline text-white btn-circle border-none bg-gray-600 text-2xl">❮</a>
                                <a href="#slide2" className="btn bg-[#FF3811] btn-circle border-none text-white text-2xl">❯</a>
                            </div>

                        </div>




                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={banner2} className="w-full h-[600px]" />
                    <div className="absolute flex justify-end right-20 bottom-0 transform -translate-y-1/2 left-5 gap-8">
                        <a href="#slide1" className="btn btn-outline text-white btn-circle border-none bg-gray-600 text-2xl">❮</a>
                        <a href="#slide3" className="btn bg-[#FF3811] btn-circle border-none text-white text-2xl">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={banner3} className="w-full h-[600px]" />
                    <div className="absolute flex justify-end right-20 bottom-0 transform -translate-y-1/2 left-5  gap-8">
                        <a href="#slide2" className="btn btn-outline text-white btn-circle border-none bg-gray-600 text-2xl">❮</a>
                        <a href="#slide4" className="btn bg-[#FF3811] btn-circle border-none text-white text-2xl">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={banner4} className="w-full h-[600px]" />
                    <div className="absolute flex justify-end right-20 bottom-0 transform -translate-y-1/2 left-5  gap-8">
                        <a href="#slide3" className="btn btn-outline text-white btn-circle border-none bg-gray-600 text-2xl">❮</a>
                        <a href="#slide1" className="btn bg-[#FF3811] btn-circle border-none text-white text-2xl">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
