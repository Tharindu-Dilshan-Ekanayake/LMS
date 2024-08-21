import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

export default function Login() {
    const navigate = useNavigate();
    
    const [data, setData] = useState({
        email: '',
        password: ''
    });

    const loginUser = async (e) => {
        e.preventDefault();
        const { email, password } = data;
        try {
            const response = await axios.post('/loginuser', { email, password });
            const userData = response.data;
            if (userData.error) {
                toast.error(userData.error);
            } else {
                setData({ email: '', password: '' }); // Clear input fields
                localStorage.setItem('user', JSON.stringify(userData));
                const role = userData.role;
                switch (role) {
                    case 'admin':
                        navigate('/adminland');
                        break;
                    case 'teacher':
                        navigate('/teacherland');
                        break;
                    case 'tutor':
                        navigate('/tutorland');
                        break;
                    case 'student':
                        navigate('/studentland');
                        break;
                    default:
                        navigate('/defaultdash');
                }
            }
        } catch (error) {
            console.error('Error logging in:', error);
        }
    };

    function DividerWithText({ text }) {
        return (
            <div className='flex items-center my-6'>
                <div className='flex-grow border-t border-gray-400'></div>
                <span className='mx-4 text-gray-500'>{text}</span>
                <div className='flex-grow border-t border-gray-400'></div>
            </div>
        );
    }

    return (
        <div className='flex justify-end mr-[150px]'>
            <div className='flex items-center justify-center h-screen'>
                <div className='w-[600px] rounded-xl flex justify-center bg-[#f4c364] bg-opacity-15'>
                    <div className='w-[400px] py-12'>
                        <div>
                            <h1 className='text-5xl'>
                                <strong>WELCOME !</strong>
                            </h1>
                        </div>
                        <div className='pt-8'>
                            <p><strong className='text-blue-950'>“Education is the key that unlocks the golden door to freedom.”</strong> —George Washington Carver</p>
                        </div>
                        <form onSubmit={loginUser}>
                            <div className='pt-12'>
                                <div className='flex justify-start'>
                                    <label><strong>Email :</strong></label>
                                </div>
                                <div className='pt-1'>
                                    <input
                                        type='email'
                                        className='border w-[400px] h-12 pl-3 pr-3 rounded-lg'
                                        placeholder='Enter the Email'
                                        value={data.email}
                                        onChange={(e) => setData({ ...data, email: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div className='pt-3'>
                                <div className='flex justify-start'>
                                    <label><strong>Password :</strong></label>
                                </div>
                                <div className='pt-1'>
                                    <input
                                        type='password'
                                        className='border w-[400px] h-12 pl-3 pr-3 rounded-lg'
                                        placeholder='Enter the password'
                                        value={data.password}
                                        onChange={(e) => setData({ ...data, password: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div className='flex justify-end pt-5'>
                                <div className='w-[450px] justify-end flex text-blue-600'>
                                    <button type="button" onClick={() => navigate('/forgotpassword')}>Forget password</button>
                                </div>
                            </div>
                            <div className='flex justify-center pt-6'>
                                <div>
                                    <button className='bg-blue-500 w-[400px] h-12 rounded-md text-white hover:bg-blue-700'>LOGIN</button>
                                </div>
                            </div>
                            <DividerWithText text="or" />
                            <div>
                                <div className='flex'>
                                    <p>Don't have an account?</p>
                                </div>
                                <div className='pt-4'>
                                    <button type="button" onClick={() => navigate('/register')} className='bg-green-500 w-[400px] h-12 rounded-md text-white hover:bg-green-700'>REGISTER</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
