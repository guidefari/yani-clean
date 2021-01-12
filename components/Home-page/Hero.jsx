// import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
    return (
        <div className='relative flex items-center justify-center mx-3 sm:shadow sm:shadow-md min-h-sm md:pt-0 md:bg-blue-300 sm:mt-6 md:mt-0 lg:py-10'>
            <div className='absolute flex items-center justify-center md:static md:w-1/2'>
                <div className='relative lg:pl-10'>
                    <img
                        src='/assets/hero.jpg'
                        title='Hero image'
                        alt='Lady shaking a rug'
                        className='inline-block object-center pb-5 rounded-none md:h-72 lg:h-96 xl:h-112'
                    />
                    <div className='absolute top-0 left-0 w-full opacity-70 bg-gradient-to-br from-blue-primary to-blue-secondary manual-height md:hidden'/>
                </div>
            </div>
            <div className='absolute my-auto md:w-1/2 md:static'>
                <main className='flex flex-col items-end justify-center pt-2 pr-5 md:pr-0 lg:pr-9 xl:pr-10 lg:pt-8 xl:pt-16 text-white-primary'>
                    <h1 className='pb-4 text-2xl text-right xl:pb-10 md:text-3xl lg:text-4xl xl:text-5xl font-heading md:text-black-heading'>Keeping your home<br/>clean and clutter free</h1>
                    <p className='max-w-xs pb-6 text-sm text-right xl:pl-3 md:text-sm md:leading-4 lg:text-lg lg:leading-5 md:max-w-4xl md:text-black-BoBody'>Welcome to Yani Care Cleaning our community-based cleaning company ensures you will receive the highest quality of cleaning wherever you request. No job is too small or too large, we hope you enjoy our friendly but passionate staff.</p>
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
