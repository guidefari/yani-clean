import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
    return (
        <div className='relative flex items-start justify-center mx-3 sm:items-center min-h-md md:bg-blue-shadowTwo md:py-10'>
            <div className='absolute flex items-center justify-center md:static md:w-1/2'>
                <div className='relative lg:pl-10'>
                    <Image
                        src='/assets/hero.png'
                        title='Hero image'
                        alt='Lady shaking a rug'
                        width={735}
                        height={500}
                        quality={100}
                        className='h-full rounded-none'
                    />
                    <div className='absolute top-0 left-0 w-full opacity-70 bg-gradient-to-br from-blue-primary to-blue-secondary manual-height md:hidden'/>
                </div>
            </div>
            <div className='absolute my-auto md:w-1/2 md:static'>
                <main className='flex flex-col items-end justify-center pt-2 pr-5 md:pr-0 lg:pr-9 xl:pr-10 lg:pt-16 text-white-primary'>
                    <h1 className='pb-4 text-2xl text-right lg:pb-10 md:text-4xl lg:text-5xl xl:text-6xl font-heading md:text-black-heading'>Keeping your home <br/> clean & clutter free</h1>
                    <p className='max-w-xl pb-6 text-sm text-right md:text-base lg:text-xl md:max-w-4xl md:text-black-BoBody'>Lorem ipsum dolor sit amet consectetur adipisicipudiandae, nihil dicta.Lore dignissimos porro. Odit enim expedita dolores, velit porro in cumque accusamus.</p>
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
