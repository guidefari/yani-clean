import React, { useState } from 'react';

const book = () => {
    const [typeOfService, setTypeOfService] = useState('regular')
    const [propertyType, setPropertyType] = useState('studio')
    const [propertySize, setPropertySize] = useState({bed: 1, bath: 1})
    const [serviceFrequency, setServiceFrequency] = useState('weekly')
    const [addOnServices, setAddOnServices] = useState([])

    const handleAddOnServices = (serviceYacho) => {
        // console.log(serviceYacho)
        
        if(!addOnServices.includes(serviceYacho)) {
            setAddOnServices([...addOnServices, serviceYacho])
            console.log(addOnServices)
        }else{
            //remove the item
            console.log(addOnServices)
        }
    }
    console.log(propertySize)

    
    return (
        <div className='container flex items-center justify-center min-h-xs'>
            <form action="" className='flex flex-col space-y-10'>
                <section id="typeOfServiceWrapper" className='flex flex-col'>
                    <h1 className='text-2xl'>1. Type of Service</h1>
                    <div className='flex space-x-10'>
                        <button type="button" value='regular' onClick={() => setTypeOfService('regular')}>Regular</button>
                        <button type="button" value='endOfTenancy' onClick={() => setTypeOfService('endOfTenancy')}>End of Tenancy</button>
                    </div>
                </section>
                <section id="propertySizeWrapper" className='flex flex-col'>
                    <h1 className='text-2xl'>2. Property Size</h1>
                    <div className='flex space-x-10'>
                        <button type="button" onClick={() => setPropertyType('studio')}>Studio</button>
                        <button type="button" onClick={() => setPropertyType('notStudio')}>2+ Bedroom</button>
                    </div>
                    <div className='flex space-x-10'>
                        <label>Bathrooms 
                            <input onChange={(e) => setPropertySize({...propertySize, bath: Number(e.target.value)})} min={0} className='w-14' name="Bathrooms" type="number" />
                        </label>
                        <label>Bedrooms
                            <input onChange={(e) => setPropertySize({...propertySize, bed: Number(e.target.value)})} min={0} className='w-14' name="Bedrooms" type="number" />
                        </label>
                    </div>
                </section>
                {(typeOfService === 'regular' ) && (<section id="serviceFrequencyWrapper" className='flex flex-col'>
                    <h1 className='text-2xl'>3. Service Frequency</h1>
                    <div className="mt-2">
                        <div>
                            <button type="button" onClick={() => setServiceFrequency('weekly')}>Weekly</button>
                        </div>
                        <div>
                            <button type="button" onClick={() => setServiceFrequency('biweekly')}>BiWeekly</button>
                        </div>
                        <div>
                            <button type="button" onClick={() => setServiceFrequency('monthly')}>Monthly</button>
                        </div>
                    </div>
                </section>)}
                <section id="addOnServicesWrapper" className='flex flex-col'>
                    <h1 className='text-2xl'>4. Add on Services</h1>
                    <div className="mt-2">
                        <div>
                            <button type="button" onClick={() => handleAddOnServices('washer')}>Washer</button>
                        </div>
                        <div>
                            <button type="button" onClick={() => handleAddOnServices('stove')}>Stove</button>
                        </div>
                        <div>
                            <button type="button" onClick={() => handleAddOnServices('nhingi')}>Nhingi</button>
                        </div>
                    </div>
                </section>
            </form>
        </div>
    )
}

export default book
