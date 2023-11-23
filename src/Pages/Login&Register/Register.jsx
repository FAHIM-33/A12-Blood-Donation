import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProvider";
import { useContext } from "react";
import toast from "react-hot-toast";
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    let { createUser, updateNameImg, googleLogin } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors }, } = useForm()
    let nav = useNavigate()

    function onSubmit(data) {
        const { email, password, name, url } = data

        const toastID = toast.loading("Registering new user...")
        createUser(email, password)
            .then(() => {
                alert('wa happen?')
                toast.success("Registration Successfully", { id: toastID })
                updateNameImg(name, url)
                    .then(() => {
                        nav('/')
                    })
                    .catch(() => toast.error('Could not add username & img'))

            })
            .catch(err => {
                console.log(err)
                toast.error(`Error: ${err.code}`, { id: toastID })
            })
    }


    const handleGoogleLogin = (e) => {
        e.preventDefault()
        let toastID = toast.loading("Logging in with Google")
        googleLogin()
            .then(() => {
                nav('/')
                toast.success("Sign in with Google", { id: toastID })
            })
            .catch(() => {
                toast.error("Failed to login with Google", { id: toastID })
            })
    }

    return (
        <div className="pb-16">
            <form onSubmit={handleSubmit(onSubmit)} className="lg:w-2/5 md:4/5 m-4 md:mx-auto p-4 border border-low rounded-lg">
                <div className=''>
                    <span className="block whitespace-nowrap text-3xl md:text-5xl text-center" >Register Now</span>
                </div>
                <div className='md:mt-12 mt-8'>
                    <label htmlFor="name"
                        className=''
                    >Enter Your Name:</label>
                    <br />
                    <input type="text" {...register("name", { required: true })} name="name" id="name" placeholder="Username"
                        className="" />
                </div>

                <div className='md:mt-8 mt-4'>
                    <label htmlFor="email"
                        className=''
                    >Enter Your Email Address:</label>
                    <br />
                    <input type="text" {...register("email", { required: true })} name="email" id="email" placeholder="Email"
                        className="" />
                </div>
                <div className='md:mt-8 mt-4'>
                    <label htmlFor="url"
                        className=''
                    >Image URL:</label>
                    <br />
                    <input type="text" {...register("url", { required: true })} name="url" id="url" placeholder="Image URL"
                        className="" />
                </div>

                <div className='md:mt-8 mt-4'>
                    <label htmlFor="email"
                        className=''
                    >Create New Password:</label>
                    <br />
                    <input type="password" required placeholder="Password" {...register("password", {
                        required: true,
                        minLength: 6,
                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                    })} />
                    {errors?.password?.type === 'pattern' && <span className="text-red-600">*Must include a capital,special character and number</span>}
                    {errors?.password?.type === 'minLength' && <span className="text-red-600">*Must be 6 characters or more</span>}
                </div>
                <input className='btn p-2 bg-low w-full rounded-md mt-8 text-xl md:text-2xl tracking-widest text-background ' value='Register' type="submit" />

                <div className='flex items-center gap-2'>
                    <div className='w-full h-[1px] bg-gray-400'></div>
                    <div className='text-lg my-2 text-low'>or</div>
                    <div className='w-full h-[1px] bg-gray-400'></div>
                </div>
                <button onClick={handleGoogleLogin} className='btn p-2 bg-low text-xl w-full rounded-md text-background flex  justify-center items-center'><span className='text-2xl md:text-3xl'><FcGoogle></FcGoogle></span>oogle</button>
            </form>
            <p className='text-center'>Already have an account? <Link to="/login" className='text-blue-600'>Login Here.</Link></p>
        </div>
    );
};

export default Register;