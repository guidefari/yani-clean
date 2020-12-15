import React, { useState } from 'react';
import Layout from '../components/layout';

const book = () => {
    const [typeOfService, setTypeOfService] = useState('regular')
    const [propertyType, setPropertyType] = useState('studio')
    const [propertySize, setPropertySize] = useState({bed: 1, bath: 1})
    const [serviceFrequency, setServiceFrequency] = useState('Weekly')
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

    const handlePropertyType = (type) => {
        switch (type) {
            case 'studio':
                setPropertyType('studio')
                setPropertySize({bed: 1, bath: 1})
                break;
            case 'notStudio':
                setPropertyType('notStudio')
                setPropertySize({bed: 2, bath: 1})
                break;
        
            default:
                break;
        }
    }
    
    console.log(propertySize)

    
    return (
        <Layout>

            <div className='container flex flex-col items-center justify-center min-h-xs'>
                <div className='flex items-center justify-center pt-4 pb-8'>
                    <h1 className='text-xl md:text-3xl lg:text-5xl font-headingSecondary text-black-heading'>Make Booking</h1>
                </div>
                <form action="" className='grid grid-cols-3 gap-4 '>
                    <div id='detailsInput' className='max-w-sm col-span-2 px-8 py-10 mb-20 space-y-10 rounded-md lg:max-w-xl bg-white-true'>
                        <section id="typeOfServiceWrapper" className='flex flex-col'>
                            <div className='pb-5 space-y-5'>
                                <h3 className='text-lg md:text-2xl lg:text-4xl font-heading text-black-heading'>Type of Service</h3>
                                <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, itaque!Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, itaque!</p>
                            </div>
                            <div className='flex items-center justify-center space-x-10'>
                                <button className='form-btn' type="button" value='regular' onClick={() => setTypeOfService('regular')}>Regular</button>
                                <button className='form-btn' type="button" value='endOfTenancy' onClick={() => setTypeOfService('endOfTenancy')}>End of Tenancy</button>
                            </div>
                        </section>
                        <section id="propertySizeWrapper" className='flex flex-col'>
                            <div className='pb-5 space-y-5'>
                                <h3 className='text-lg md:text-2xl lg:text-4xl font-heading text-black-heading'>Property Size</h3>
                                <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, itaque!Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, itaque!</p>
                            </div>
                            <div className='flex items-center justify-center pb-5 space-x-10'>
                                <button className='form-btn' type="button" onClick={() => handlePropertyType('notStudio')}>2+ Bedroom</button>
                                <button className='form-btn' type="button" onClick={() => handlePropertyType('studio')}>Studio</button>
                            </div>
                            {(propertyType === 'notStudio') && (
                                <div className='flex items-center justify-center space-x-10'>
                                    <div>
                                        <label htmlFor="bedrooms" className="block text-sm font-medium text-gray-700">Bedrooms</label>
                                        <input 
                                            type="number" 
                                            name="bedrooms" 
                                            id="bedrooms" 
                                            min={0}  
                                            className="number-input" 
                                            onChange={(e) => setPropertySize({...propertySize, bed: Number(e.target.value)})} 
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="bathrooms" className="block text-sm font-medium text-gray-700">Bathrooms</label>
                                        <input 
                                            type="number" 
                                            name="bathrooms" 
                                            id="bathrooms" 
                                            min={0}  
                                            className="number-input" 
                                            onChange={(e) => setPropertySize({...propertySize, bath: Number(e.target.value)})} 
                                        />
                                    </div>
                                </div>
                            )}
                        </section>
                        {(typeOfService === 'regular' ) && (
                            <section id="serviceFrequencyWrapper" className='flex flex-col'>
                                <div className='pb-5 space-y-5'>
                                    <h3 className='text-lg md:text-2xl lg:text-4xl font-heading text-black-heading'>Service Frequency</h3>
                                    <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, itaque!Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, itaque!</p>
                                </div>
                                <div className="flex items-center justify-center mt-2 space-x-10">
                                    <div>
                                        <button className='form-btn' type="button" onClick={() => setServiceFrequency('Weekly')}>Weekly</button>
                                    </div>
                                    <div>
                                        <button className='form-btn' type="button" onClick={() => setServiceFrequency('BiWeekly')}>BiWeekly</button>
                                    </div>
                                    <div>
                                        <button className='form-btn' type="button" onClick={() => setServiceFrequency('Monthly')}>Monthly</button>
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
                                    <button className='form-btn' type="button" onClick={() => handleAddOnServices('washer')}>Washer</button>
                                </div>
                                <div>
                                    <button className='form-btn' type="button" onClick={() => handleAddOnServices('stove')}>Stove</button>
                                </div>
                                <div>
                                    <button className='form-btn' type="button" onClick={() => handleAddOnServices('nhingi')}>Nhingi</button>
                                </div>
                                <div>
                                    <button className='form-btn' type="button" onClick={() => handleAddOnServices('item')}>item here</button>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div id='detailsConfirm' className="sticky col-span-1 px-5 py-10 bg-gray-300 top-20 max-h-96">
                        <section>
                            <h3 className='text-sm font-heading text-black-heading'>{(typeOfService === 'regular' ) ? `${serviceFrequency} Cleaning Plan` : `End of Tenancy Cleaning Plan`} </h3>
                            <div className='text-xs'>
                                {propertySize.bed} bed, {propertySize.bath} bath
                            </div>
                        </section>
                        {(addOnServices.length > 0) && (
                            <section>
                                <h3 className='text-sm font-heading text-black-heading'>Add on Services </h3>
                                <div className='flex flex-row flex-wrap space-x-3 text-xs'>
                                    {addOnServices.map((service) => <span>{service}</span>)}
                                </div>
                            </section>
                        )}
                        <button type='submit' className="inline-flex items-center px-3 py-1 my-5 text-base font-semibold border-0 rounded text-blue-primary bg-blue-shadowOne focus:outline-none hover:bg-blue-shadowTwo ">
                            Confirm Booking
                        </button>
                    </div>
                </form>
            </div>
        </Layout>
    )
}

export default book
