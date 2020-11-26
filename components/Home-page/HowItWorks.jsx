import { Info } from "react-feather"

const HowItWorks = () => {
    return (
        <div className='transform -translate-y-10 bg-gradient-to-b from-white-true to-white-primary mx-14'>
            <div className='flex items-center justify-center py-16 space-x-3 '>
                <Info className='inline'/>
                <h1 className='text-5xl font-heading text-black-heading'>How it works</h1>
            </div>
            <section className='relative flex items-center justify-center w-full px-32 space-x-10'>
                <div className='z-10 flex flex-col w-4/12 px-5 py-4 border-2 border-gray-400 shadow-md shadow-lg bg-white-true'>
                    <div className='flex items-center justify-between w-full pb-3'>
                        <h3 className='font-heading text-black-heading'>Make Booking</h3>
                        <aside className='px-3 py-1 rounded-md font-heading text-blue-primary bg-blue-shadowOne'>1</aside>
                    </div>
                    <p className='text-sm '>Est penatibus pretium, ut mi. Pulvinar ante orci euismod lectus. </p>
                </div>
                <div className='z-10 flex flex-col w-4/12 px-5 py-4 border-2 border-gray-400 shadow-md shadow-lg bg-white-true'>
                    <div className='flex items-center justify-between w-full pb-3'>
                        <h3 className='font-heading text-black-heading'>Contract & Invoice</h3>
                        <aside className='px-3 py-1 rounded-md font-heading text-blue-primary bg-blue-shadowOne'>2</aside>
                    </div>
                    <p className='text-sm '>Est penatibus pretium, ut mi. Pulvinar ante orci euismod lectus. </p>
                </div>
                <div className='z-10 flex flex-col w-4/12 px-5 py-4 border-2 border-gray-400 shadow-md shadow-lg bg-white-true'>
                    <div className='flex items-center justify-between w-full pb-3'>
                        <h3 className='font-heading text-black-heading'>Payment</h3>
                        <aside className='px-3 py-1 rounded-md font-heading text-blue-primary bg-blue-shadowOne'>3</aside>
                    </div>
                    <p className='text-sm '>Est penatibus pretium, ut mi. Pulvinar ante orci euismod lectus. </p>
                </div>
                <svg className='absolute pr-32 text-gray-400 top-1/2 pl-28' viewBox="0 0 100 5" xmlns="http://www.w3.org/2000/svg">
                    <line x1={0} y1={0} x2={100} y2={0} stroke="#B6B3B3" />
                </svg>
            </section>
        </div>
    )
}

export default HowItWorks
