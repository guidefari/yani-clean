import React, { useState } from 'react';
import Layout from '../components/layout';

const book = () => {
    const [typeOfService, setTypeOfService] = useState('regular')
    const [propertyType, setPropertyType] = useState('studio')
    const [propertySize, setPropertySize] = useState({bed: 1, bath: 1})
    const [serviceFrequency, setServiceFrequency] = useState('weekly')
    const [addOnServices, setAddOnServices] = useState([])

    const handleAddOnServices = (serviceYacho) => {
        if(!addOnServices.includes(serviceYacho)) {
            // if not in Array, add it
            setAddOnServices([...addOnServices, serviceYacho])
        }else{
            // if in Array,remove that sucker
            const indexOfItemInArray = addOnServices.findIndex(item => item === serviceYacho)
            addOnServices.splice(indexOfItemInArray, 1)
            setAddOnServices([...addOnServices])
        }
    }
    console.log(propertySize)

    
    return (
        <Layout>

            <div className='container flex flex-col items-center justify-center min-h-xs'>
                <div className='flex items-center justify-center pt-4 pb-8'>
                    <h1 className='text-xl md:text-3xl lg:text-5xl font-headingSecondary text-black-heading'>Make Booking</h1>
                </div>
                <form action="" className='flex flex-col max-w-sm px-3 py-5 space-y-10 lg:max-w-xl bg-white-true'>
                    <section id="typeOfServiceWrapper" className='flex flex-col'>
                        <div className='pb-5 space-y-5'>
                            <h3 className='text-lg md:text-2xl lg:text-4xl font-heading text-black-heading'>Type of Service</h3>
                            <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, itaque!Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, itaque!</p>
                        </div>
                        <div className='flex items-center justify-center space-x-10'>
                            <button className='px-5 py-3 rounded-md font-headingSecondary bg-blue-tertiary focus:outline-none focus:ring-2 focus:ring-blue-primary focus:ring-opacity-50' type="button" value='regular' onClick={() => setTypeOfService('regular')}>Regular</button>
                            <button className='px-5 py-3 rounded-md font-headingSecondary bg-blue-tertiary focus:outline-none focus:ring-2 focus:ring-blue-primary focus:ring-opacity-50' type="button" value='endOfTenancy' onClick={() => setTypeOfService('endOfTenancy')}>End of Tenancy</button>
                        </div>
                    </section>
                    <section id="propertySizeWrapper" className='flex flex-col'>
                        <div className='pb-5 space-y-5'>
                            <h3 className='text-lg md:text-2xl lg:text-4xl font-heading text-black-heading'>Property Size</h3>
                            <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, itaque!Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, itaque!</p>
                        </div>
                        <div className='flex items-center justify-center space-x-10'>
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
                    {(typeOfService === 'regular' ) && (
                        <section id="serviceFrequencyWrapper" className='flex flex-col'>
                            <div className='pb-5 space-y-5'>
                                <h3 className='text-lg md:text-2xl lg:text-4xl font-heading text-black-heading'>Service Frequency</h3>
                                <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, itaque!Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, itaque!</p>
                            </div>
                            <div className="flex items-center justify-center mt-2 space-x-10">
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
                        </section>
                    )}
                    <section id="addOnServicesWrapper" className='flex flex-col'>
                        <div className='pb-5 space-y-5'>
                            <h3 className='text-lg md:text-2xl lg:text-4xl font-heading text-black-heading'>Add on Services</h3>
                            <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, itaque!Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, itaque!</p>
                        </div>
                        <div className="flex items-center justify-center mt-2 space-x-10">
                            <div>
                                <button type="button" onClick={() => handleAddOnServices('washer')}>Washer</button>
                            </div>
                            <div>
                                <button type="button" onClick={() => handleAddOnServices('stove')}>Stove</button>
                            </div>
                            <div>
                                <button type="button" onClick={() => handleAddOnServices('nhingi')}>Nhingi</button>
                            </div>
                            <div>
                                <button type="button" onClick={() => handleAddOnServices('item')}>item here</button>
                            </div>
                        </div>
                    </section>
                </form>
            </div>
        </Layout>
    )
}

export default book
