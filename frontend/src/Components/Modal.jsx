import React from 'react'

const Modal = () => {
    return (
        <div >
            <div className='flex justify-center mt-60'>
                <div className='bg-white shadow-lg border p-4 mx-4 w-full lg:w-[30vw] h-auto pb-4 rounded-xl '>
                    <h1 className='text-blue-600 text-center font-bold mt-4 text-2xl'>Modal Heading to be placed here</h1>
                    <div className='border-b border-blue-200 mt-4'></div>
                    <div>
                        <h1 className='text-center font-semibold text-xl mt-20'>Are you sure you want to continue ?</h1>

                    </div>
                    <div className='flex p-4 mt-12 justify-center'>
                        <div className='grid grid-cols-2 gap-20'>
                            <div>
                                <button className='bg-white border  hover:bg-slate-600 transition hover:text-white  text-black font-semibold rounded-lg px-8 py-2 mt-4'>Yes</button>
                            </div>
                            <div>
                                <button className='bg-blue-700 hover:bg-slate-600 transition  text-white font-semibold rounded-lg px-8 py-2 mt-4'>No</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Modal
