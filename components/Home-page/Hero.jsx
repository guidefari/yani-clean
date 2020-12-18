// import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
    return (
        <div className='relative flex items-center justify-center mx-3 sm:shadow sm:shadow-md sm:pt-14 min-h-sm md:bg-blue-300 sm:mt-6 md:mt-0 lg:py-10'>
            <div className='absolute flex items-center justify-center md:static md:w-1/2'>
                <div className='relative lg:pl-10'>
                    <img
                        src='/assets/hero.png'
                        title='Hero image'
                        alt='Lady shaking a rug'
                        className='pb-5 rounded-none sm:h-full'
                    />
                    <div className='absolute top-0 left-0 w-full opacity-70 bg-gradient-to-br -pb-5 from-blue-primary to-blue-secondary manual-height md:hidden'/>
                </div>
            </div>
            <div className='absolute my-auto md:w-1/2 md:static'>
                <main className='flex flex-col items-end justify-center pt-2 pr-5 md:pr-0 lg:pr-9 xl:pr-10 lg:pt-8 xl:pt-16 text-white-primary'>
                    <h1 className='pb-4 text-2xl text-right xl:pb-10 md:text-4xl lg:text-5xl xl:text-6xl font-heading md:text-black-heading'>Pristine surroundings,<br/>effortlessly</h1>
                    <p className='max-w-xl pb-6 text-sm text-right md:text-base lg:text-xl md:max-w-4xl md:text-black-BoBody'>Our service let’s you enjoy an immaculate home, whilst you save on time and effort. We put a sparkling house a phone call away.</p>
                    <Link href='/book'>
                        <button className="inline-flex items-center px-3 py-1 text-base font-semibold border-0 rounded text-white-primary bg-blue-primary focus:outline-none hover:bg-blue-secondary ">
                            Get Started
                        </button>
                    </Link>
                </main>
            </div>
        </div>
    )
}

export default Hero
