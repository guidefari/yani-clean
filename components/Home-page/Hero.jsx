import Image from 'next/image'

const Hero = () => {
    return (
        <div className='flex mx-3 bg-blue-shadowTwo md:py-10'>
            <div className='flex items-center justify-center md:w-1/2 '>
                <Image
                    src='/assets/hero.png'
                    title='Hero image'
                    alt='Lady shaking a rug'
                    width={735}
                    height={500}
                    quality={100}
                    className='rounded-none '
                />
            </div>
            <div className=' md:w-1/2'>
                <main className='flex flex-col items-end justify-center lg:pr-24 lg:pt-16'>
                    <h1 className='pb-10 text-right md:text-4xl lg:text-7xl font-heading'>Keeping your home <br/> clean & clutter free</h1>
                    <p className='max-w-4xl pb-6 text-right'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est voluptates culpa aspernatur repudiandae, nihil dicta.Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, dignissimos porro. Odit enim expedita dolores, velit porro in cumque accusamus.</p>
                    <button className="inline-flex items-center px-3 py-1 text-base font-semibold border-0 rounded text-white-primary bg-blue-primary focus:outline-none hover:bg-blue-secondary ">
                        Get Started
                    </button>
                </main>
            </div>
        </div>
    )
}

export default Hero
