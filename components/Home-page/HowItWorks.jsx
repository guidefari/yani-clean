import { CreditCard, Clipboard, User , Info } from "react-feather"
import Link from 'next/link'

const HowItWorks = () => {
    return (
        <div className='transform -translate-y-10 bg-gradient-to-b from-white-true to-white-primary xl:mx-14 mx-14 pb-14'>
            <div className='flex items-center justify-center py-12 space-x-3 sm:py-16 '>
                <div className='flex items-center justify-center w-8 h-8 rounded-full bg-blue-shadowTwo'>
                    <Info className='inline text-blue-primary'/>
                </div>
                <h1 className='text-xl md:text-3xl lg:text-5xl font-heading text-black-heading'>How it works</h1>
            </div>
            <section className='relative flex flex-col items-center justify-center w-full px-5 space-y-10 sm:px-20 lg:space-y-0 lg:space-x-10 lg:flex-row xl:px-32'>
                <div className='z-10 flex flex-col w-11/12 px-5 py-4 border-2 border-gray-400 shadow-md shadow-lg sm:w-9/12 bg-white-true'>
                    <div className='flex items-center justify-between w-full pb-3'>
                        <Link href='/book'>
                            <a>
                                <h3 className='font-heading text-black-heading hover:text-blue-primary basic-animation '>
                                    <User className='inline mr-3 text-gray-400 hover:text-yellow-primary' />Make Booking
                                </h3>
                            </a>
                        </Link>
                        <aside className='px-2 py-0 rounded-md sm:px-3 sm:py-1 font-heading text-blue-primary bg-blue-shadowOne'>1</aside>
                    </div>
                    <p className='text-sm '>Give us insight on work at hand.</p>
                </div>
                <div className='z-10 flex flex-col w-11/12 px-5 py-4 border-2 border-gray-400 shadow-md shadow-lg sm:w-9/12 bg-white-true'>
                    <div className='flex items-center justify-between w-full pb-3'>
                        <h3 className='font-heading text-black-heading'>
                            <Clipboard className='inline mr-3 text-gray-400' />Contract & Invoice
                        </h3>
                        <aside className='px-2 py-0 rounded-md sm:px-3 sm:py-1 font-heading text-blue-primary bg-blue-shadowOne'>2</aside>
                    </div>
                    <p className='text-sm '>Our sales team will reach out with the contract and invoice before we start work.</p>
                </div>
                <div className='z-10 flex flex-col w-11/12 px-5 py-4 border-2 border-gray-400 shadow-md shadow-lg sm:w-9/12 bg-white-true'>
                    <div className='flex items-center justify-between w-full pb-3'>
                        <h3 className='font-heading text-black-heading'>
                            <CreditCard className='inline mr-3 text-gray-400' />Payment
                        </h3>
                        <aside className='px-2 py-0 rounded-md sm:px-3 sm:py-1 font-heading text-blue-primary bg-blue-shadowOne'>3</aside>
                    </div>
                    <p className='text-sm '>The final step before a sparkling home.</p>
                </div>
                <svg className='absolute hidden pr-32 text-gray-400 lg:block lg:top-1/2 pl-28' viewBox="0 0 100 5" xmlns="http://www.w3.org/2000/svg">
                    <line className='' x1={0} y1={0} x2={100} y2={0} stroke="#B6B3B3" />
                    {/* <line className='inline-flex lg:hidden' x1={0} y1={0} x2={0} y2={100} stroke="#B6B3B3" /> */}
                </svg>
                <div className='absolute block lg:hidden left-1/2 min-h-sm'>
                    <svg height={300} width={5}>
                        <line x1={0} y1={0} x2={0} y2={300} style={{ strokeWidth: 5}} stroke="#B6B3B3" />
                    </svg>

                </div>
            </section>
        </div>
    )
}

export default HowItWorks
