import { Link } from 'react-router-dom';
import bannerimg3 from '../../../assets/rotated.png'
const Banner = () => {
    return (
        <section>
            <figure className='relative'>
                <img className='w-full block' src={bannerimg3} alt="" />
                <div className='absolute text-white text-7xl inset-0 flex items-center bg-[#00000086] font-bold'>
                    <div className='text-center mx-auto'>
                        <h1>Donate Blood</h1>
                        <h1>Save life</h1>
                        <Link to='/register'>
                            <button className='btn text-xl px-4 backdrop-blur-md  border-2  py-2 rounded-full border-prim'>Join as Donor</button>
                        </Link>
                        <div className='text-base flex mt-4'>
                            <button className='btn px-2 rounded-l-md bg-white text-prim'>Search</button>
                            <input type="text" className='backdrop-blur-sm' placeholder='Search Donor' />
                        </div>

                    </div>
                </div>
            </figure>
        </section>
    );
};

export default Banner;