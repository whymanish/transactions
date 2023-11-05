import React from 'react'

const Sidebar = () => {
    return (
        <div>
            <aside className='w-48' >
                <div className='border-r  h-screen border-blue-500'>
                    <div className='flex justify-center pt-12'>
                        <div className=' w-16'>
                            <svg viewBox="-3 0 262 262" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" fill="#4285F4"></path><path d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" fill="#34A853"></path><path d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" fill="#FBBC05"></path><path d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" fill="#EB4335"></path></g></svg>

                        </div>
                    </div>

                    <ul className='mt-16'>
                        <li className='bg-gray-100 transition hover:bg-gray-200 border font-semibold cursor-pointer mt-2 text-center text-black py-2 mx-2 rounded-lg'>Dashboard</li>
                        <li className='bg-gray-100 transition hover:bg-gray-200 border font-semibold cursor-pointer mt-2 text-center text-black py-2 mx-2 rounded-lg'>Dashboard</li>
                        <li className='bg-gray-100 transition hover:bg-gray-200 border font-semibold cursor-pointer mt-2 text-center text-black py-2 mx-2 rounded-lg'>Dashboard</li>
                        <li className='bg-gray-100 transition hover:bg-gray-200 border font-semibold cursor-pointer mt-2 text-center text-black py-2 mx-2 rounded-lg'>Dashboard</li>
                        <li className='bg-gray-100 transition hover:bg-gray-200 border font-semibold cursor-pointer mt-2 text-center text-black py-2 mx-2 rounded-lg'>Dashboard</li>
                        <li className='bg-gray-100 transition hover:bg-gray-200 border font-semibold cursor-pointer mt-2 text-center text-black py-2 mx-2 rounded-lg'>Dashboard</li>
                        <li className='bg-gray-100 transition hover:bg-gray-200 border font-semibold cursor-pointer mt-2 text-center text-black py-2 mx-2 rounded-lg'>Dashboard</li>
                        <li className='bg-gray-100 transition hover:bg-gray-200 border font-semibold cursor-pointer mt-2 text-center text-black py-2 mx-2 rounded-lg'>Dashboard</li>
                    </ul>
                    <div className='flex justify-center'>
                        <div className='bg-gray-100 w-40 h-40 rounded-xl mt-12'>
                            <div className='flex justify-center'  >
                                <img className='w-12 h-12 mt-4 object-cover rounded-full' src='https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&q=80&w=1931&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
                            </div>
                            <h1 className='text-center mt-2 font-bold'>Manishkumar</h1>
                            <div className='text-center'>
                                <button className='bg-white border px-4 text-red-600 font-medium mt-4 py-2 rounded-lg'>Log out</button>
                            </div>
                        </div>
                    </div>

                </div>

            </aside>
        </div>
    )
}

export default Sidebar
