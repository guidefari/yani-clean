import Image from 'next/image'

const Hero = () => {
    return (
        <div className='flex bg-blue-shadowTwo md:py-10'>
            <div className='flex items-center justify-center md:w-1/2 '>
                <Image
                    src='/assets/hero.png'
                    title='Hero image'
                    alt='Lady shaking a rug'
                    width={735}
                    height={500}
                    quality={100}
                    className='inline-block w-96'
                />
            </div>
            <div className='flex flex-col items-end md:w-1/2'>
                <h1 className='text-6xl text-right font-heading'>Keeping your home <br/> clean & clutter free</h1>
                <p className='text-right '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, dignissimos porro. Odit enim expedita dolores, velit porro in cumque accusamus.</p>
                <button className="inline-flex items-center px-3 py-1 text-base font-semibold border-0 rounded text-white-primary bg-blue-primary focus:outline-none hover:bg-blue-secondary ">
                    Get Started
                </button>
            </div>
        </div>
    )
}

export default Hero
