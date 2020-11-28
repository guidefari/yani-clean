

const ServiceAreas = () => {
    const regions = [
        {
            Area: 'North West Of England',
            picture: 'https://images.unsplash.com/photo-1536260853340-dfb1cbc13a57?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=675&q=80',
        },
        {
            Area: 'Greater Manchester',
            picture: 'https://images.unsplash.com/photo-1536260853340-dfb1cbc13a57?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=675&q=80',
        },
        {
            Area: 'Bolton',
            picture: 'https://images.unsplash.com/photo-1536260853340-dfb1cbc13a57?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=675&q=80',
        },
        {
            Area: 'Bolton',
            picture: 'https://images.unsplash.com/photo-1536260853340-dfb1cbc13a57?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=675&q=80',
        },
        {
            Area: 'Bolton',
            picture: 'https://images.unsplash.com/photo-1536260853340-dfb1cbc13a57?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=675&q=80',
        },
    ]


    return (
        <section className='bg-gradient-to-r from-white-true to-white-primary xl:mx-12 mx-14 pb-14'>
            <h3 className="text-xl md:text-3xl lg:text-5xl font-heading text-black-heading">Regions We Service</h3>
            <div className='flex space-x-12 overflow-x-scroll'>
                {
                    regions.map(({Area, picture}) => (
                    <div className="container relative mx-auto my-2 overflow-hidden bg-white rounded-lg shadow-lg" key={Area} style={{minWidth: '20rem',}}>
                        <span className="absolute z-20 flex items-center justify-center w-10 h-10 text-yellow-600 bg-yellow-200 rounded-full top-6 left-6">i</span>
                        <div className="border-t-8 border-yellow-300" style={{clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 5vw))'}}>
                            <img className="w-full" src={picture} alt="Profile image" />
                        </div>
                        <div className="pt-6 pb-12 text-center text-gray-600">
                            <h3 className="text-2xl font-headingSecondary text-black-heading">{Area}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default ServiceAreas
