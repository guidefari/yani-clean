import React, { useState } from 'react';

const book = () => {
    const [typeOfService, setTypeOfService] = useState('regular')
    const [propertySize, setPropertySize] = useState({type: 'studio', layout: {bed: 1, bath: 1}})
    console.log(typeOfService)

    
    return (
        <div className='container flex items-center justify-center min-h-xs'>
            <form action="" className='flex flex-col space-y-10'>
                <section id="typeOfService" className='flex flex-col'>
                    <h1 className='text-2xl'>1. Type of Service</h1>
                    <div className='flex space-x-10'>
                        <button type="button" value='regular' onClick={() => setTypeOfService('regular')}>Regular</button>
                        <button type="button" value='endOfTenancy' onClick={() => setTypeOfService('endOfTenancy')}>End of Tenancy</button>
                    </div>
                </section>
                <section id="propertySize" className='flex flex-col'>
                    <h1 className='text-2xl'>2. Property Size</h1>
                    <div className='flex space-x-10'>
                        <button>Studio</button>
                        <button>2+ Bedroom</button>
                    </div>
                    <div className='flex space-x-10'>
                        <label>Bathrooms
                            <input  className='w-14' name="Bathrooms" type="number" />
                        </label>
                        <label>Bedrooms
                            <input className='w-14' name="Bedrooms" type="number" />
                        </label>
                    </div>
                </section>
                <section id="serviceFrequency" className='flex flex-col'>
                    <h1 className='text-2xl'>3. Service Frequency</h1>
                    <div className="mt-2">
                        <div>
                            <button>Weekly</button>
                        </div>
                        <div>
                            <button>BiWeekly</button>
                        </div>
                        <div>
                            <button>Monthly</button>
                        </div>
                    </div>
                </section>
                <section id="addOnServices" className='flex flex-col'>
                    <h1 className='text-2xl'>4. Add on Services</h1>
                    <div className="mt-2">
                        <div>
                            <button>Washer</button>
                        </div>
                        <div>
                            <button>Stove</button>
                        </div>
                        <div>
                            <button>Nhingi</button>
                        </div>
                    </div>
                </section>
            </form>
        </div>
    )
}

export default book
