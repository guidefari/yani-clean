import { ArrowRight } from "react-feather";
import Link from 'next/link'

const Pricing = () => {
    return (
            <section className=' xl:mx-12 sm:mx-14 pb-14'>
                <div className="container max-w-full px-6 py-10 mx-auto lg:py-24">
                    <div className='flex flex-col md:flex-row md:justify-between'>
                        <h1 className="text-xl md:text-3xl lg:text-5xl font-heading text-black-heading">
                            What we can do<br className='hidden md:inline'/> for you
                        </h1>
                        <p className="hidden mt-2 text-lg text-left text-gray-700 sm:block sm:max-w-sm lg:max-w-md md:px-6 md:text-right">
                            <Link href='/book'><a className='pb-3 basic-animation text-blue-primary hover:border-blue-900 hover:border-b-2'>Make a booking now <ArrowRight className='inline text-yellow-primary animate-pulse'/></a></Link>
                        </p>
                    </div>
                    <div className="w-24 h-1 mx-auto my-4 rounded opacity-75 md:my-8 xl:my-10 bg-yellow-secondary" />
                    <div className="max-w-full mx-auto my-3 md:max-w-6xl md:px-8">
                        <div className="relative flex flex-col items-center block lg:flex-row lg:space-x-2">
                            <div className="relative z-0 w-11/12 max-w-sm my-8 rounded-lg shadow-lg sm:w-3/5 lg:w-1/3 sm:my-5 ">
                                <div className="overflow-hidden text-black bg-blue-700 rounded-lg shadow-lg pb-14">
                                    <div className="block max-w-sm px-8 mx-auto mt-2 text-sm text-left text-black sm:text-md lg:px-6">
                                        <h1 className="p-3 pb-10 text-base font-medium tracking-wide text-center uppercase font-heading xl:text-lg text-white-secondary">
                                            Carpet Cleaning 
                                        </h1>
                                        <p className='text-blue-shadowTwo font-rubikItalic'>
                                            Price depends on size of the room
                                        </p>
                                    </div>
                                    <div className="flex flex-wrap px-6 mt-3">
                                    <ul>
                                        <li className="flex items-center mb-2">
                                        <div className="rounded-full fill-current lg:p-2 text-yellow-secondary ">
                                            <ArrowRight className='inline-block w-4 h-4 lg:w-6 lg:h-6'/>
                                        </div>
                                        <span className="ml-3 text-sm text-blue-shadowTwo">Approx. <span className='font-bold text-yellow-primary'>£30-35</span> for a living room.</span>
                                        </li>
                                        <li className="flex items-center mb-2">
                                        <div className="rounded-full fill-current lg:p-2 text-yellow-secondary ">
                                            <ArrowRight className='inline-block w-4 h-4 lg:w-6 lg:h-6'/>
                                        </div>
                                        <span className="ml-3 text-sm text-blue-shadowTwo"><span className='font-bold text-yellow-primary'>£20</span> for a small bedroom. Dry cleaning will cost about double this.</span>
                                        </li>
                                    </ul> 
                                    </div>  
                                </div>
                            </div>
                            <div className="relative z-10 w-full max-w-md my-8 bg-blue-700 rounded-lg shadow-lg sm:w-2/3 lg:w-1/3 sm:my-5 pb-14">
                                <div className="py-4 text-sm font-semibold leading-none tracking-wide text-center uppercase rounded-t-lg text-black-heading bg-blue-shadowTwo">
                                    Most Popular
                                </div>
                                <div className="block max-w-sm px-8 mx-auto mt-2 text-sm text-left text-black sm:text-md lg:px-6">
                                    <h1 className="p-3 pb-0 text-base font-medium tracking-wide text-center uppercase font-heading xl:text-lg text-white-secondary">
                                        General Cleaning
                                    </h1>
                                    <h2 className="pb-6 text-sm text-center text-yellow-primary font-heading"><span className="text-3xl">£15</span> /hr</h2> 
                                    <p className='text-blue-shadowTwo font-rubikItalic'>
                                        2 hours minimum
                                    </p>
                                </div>
                                <div className="flex flex-wrap px-6 mt-3">
                                    <ul>
                                    <li className="flex items-center mb-2">
                                        <div className="rounded-full fill-current lg:p-2 text-yellow-secondary">
                                            <ArrowRight className='inline-block w-4 h-4 lg:w-6 lg:h-6'/>
                                        </div>
                                        <span className="ml-3 text-sm text-blue-shadowTwo">Vacuuming the entire house</span>
                                    </li>
                                    <li className="flex items-center mb-2">
                                        <div className="rounded-full fill-current lg:p-2 text-yellow-secondary ">
                                            <ArrowRight className='inline-block w-4 h-4 lg:w-6 lg:h-6'/>
                                        </div>
                                        <span className="ml-3 text-sm text-blue-shadowTwo">Cleaning the bathrooms, including toilets</span>
                                    </li>
                                    <li className="flex items-center mb-2">
                                        <div className="rounded-full fill-current lg:p-2 text-yellow-secondary ">
                                            <ArrowRight className='inline-block w-4 h-4 lg:w-6 lg:h-6'/>
                                        </div>
                                        <span className="ml-3 text-sm text-blue-shadowTwo">Cleaning the kitchen, including quickly mopping the floor</span>
                                    </li>
                                    <li className="flex items-center mb-2">
                                        <div className="rounded-full fill-current lg:p-2 text-yellow-secondary ">
                                            <ArrowRight className='inline-block w-4 h-4 lg:w-6 lg:h-6'/>
                                        </div>
                                        <span className="ml-3 text-sm text-blue-shadowTwo">A few assorted small tasks like wiping surfaces down, dusting the furniture and TV.</span>
                                    </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="relative z-0 w-11/12 max-w-sm my-8 rounded-lg shadow-lg sm:w-3/5 lg:w-1/3 sm:my-5 md:-ml-4">
                                <div className="overflow-hidden text-black bg-blue-700 rounded-lg shadow-lg pb-14">
                                    <div className="block max-w-sm px-8 mx-auto mt-2 text-sm text-left text-black sm:text-md lg:px-6">
                                        <h1 className="p-3 pb-10 text-base font-medium tracking-wide text-center uppercase font-heading xl:text-lg text-white-secondary">
                                            End of Tenancy
                                        </h1>
                                        <p className='text-blue-shadowTwo font-rubikItalic'>
                                            Let the professionals handle it.
                                        </p>
                                    </div>
                                    <div className="flex flex-wrap px-6 mt-3">
                                    <ul>
                                        <li className="flex items-center mb-2">
                                        <div className="rounded-full fill-current lg:p-2 text-yellow-secondary ">
                                            <ArrowRight className='inline-block w-4 h-4 lg:w-6 lg:h-6'/>
                                        </div>
                                        <span className="ml-3 text-sm text-blue-shadowTwo"><span className='font-bold text-yellow-primary'>£80</span>  for end of tenancy cleaning for a studio flat </span>
                                        </li>
                                        <li className="flex items-center mb-2">
                                        <div className="rounded-full fill-current lg:p-2 text-yellow-secondary ">
                                            <ArrowRight className='inline-block w-4 h-4 lg:w-6 lg:h-6'/>
                                        </div>
                                        <span className="ml-3 text-sm text-blue-shadowTwo"><span className='font-bold text-yellow-primary'>£160</span> for end of tenancy cleaning for a 3-bedroom house</span>
                                        </li>
                                    </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default Pricing
