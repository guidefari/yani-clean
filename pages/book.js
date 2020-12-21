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
    
    console.log(propertySize.bed)

    
    return (
        <Layout>

            <div className='container flex flex-col items-center justify-center min-h-xs'>
                <div className='flex items-center justify-center pt-4 pb-8'>
                    <h1 className='text-xl md:text-3xl lg:text-5xl font-headingSecondary text-black-heading'>Make Booking</h1>
                </div>
                <form name="booking" method="POST" data-netlify="true" className='grid grid-cols-1 lg:grid-cols-3 lg:gap-4 '>
                    <>
                        <input type="hidden" name="bot-field" />
                        <input type="hidden" name="form-name" defaultValue="booking" />
                        <input type="hidden" name='property-type' value={propertyType}/>
                        <input type="hidden" name='property-size-bed' value={propertySize.bed}/>
                        <input type="hidden" name='property-size-bath' value={propertySize.bath}/>
                        <input type="hidden" name='type-of-service' value={typeOfService}/>
                        <input type="hidden" name='service-frequency' value={serviceFrequency}/>
                        <input type="hidden" name='addOnServices' value={addOnServices}/>
                    </>
                    <div id='detailsInput' className='max-w-md px-8 py-10 space-y-10 rounded-md md:max-w-sm md:mb-20 md:col-span-2 lg:max-w-xl bg-white-true'>
                        <section id="typeOfServiceWrapper" className='flex flex-col'>
                            <div className='pb-5 space-y-5'>
                                <h3 className='text-lg md:text-2xl lg:text-4xl font-heading text-black-heading'>Type of Service</h3>
                                <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, itaque!Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, itaque!</p>
                            </div>
                                <div className='flex items-center justify-center space-x-10 '>
                                    <button className='leading-4 form-btn' type="button" value='regular' onClick={() => setTypeOfService('regular')}>Regular Service</button>
                                    <button className='leading-4 form-btn' type="button" value='endOfTenancy' onClick={() => setTypeOfService('endOfTenancy')}>End of Tenancy</button>
                                </div>
                        </section>
                        <section id="propertySizeWrapper" className='flex flex-col'>
                            <div className='pb-5 space-y-5'>
                                <h3 className='text-lg md:text-2xl lg:text-4xl font-heading text-black-heading'>Property Size</h3>
                                <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, itaque!Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, itaque!</p>
                            </div>
                                <div className='flex items-center justify-center space-x-10 '>
                                    <button className='form-btn' type="button" onClick={() => handlePropertyType('notStudio')}>2+ Bed</button>
                                    <button className='form-btn' type="button" onClick={() => handlePropertyType('studio')}>Studio</button>
                                </div>
                            {(propertyType === 'notStudio') && (
                                <div className='flex items-center justify-center pt-5 space-x-10'>
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
                                <div className="flex items-center justify-center mt-2 space-x-5 sm:space-x-10">
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
                            <div className="flex flex-wrap items-center justify-center mt-2 space-x-5 lg:space-x-7">
                                <div>
                                    <button className='form-btn-service' type="button" onClick={() => handleAddOnServices('stove')}>
                                        <img className='service-logo-svg' src="/assets/service-logos/gas-stove.svg" alt="stove icon"/>
                                    </button>
                                </div>
                                <div>
                                    <button className='form-btn-service' type="button" onClick={() => handleAddOnServices('closet')}>
                                        <img className='service-logo-svg' src="/assets/service-logos/closet.svg" alt="closet icon"/>
                                    </button>
                                </div>
                                <div>
                                    <button className='form-btn-service' type="button" onClick={() => handleAddOnServices('fridge')}>
                                        <img className='service-logo-svg' src="/assets/service-logos/fridge.svg" alt="fridge icon"/>
                                    </button>
                                </div>
                                <div>
                                    <button className='form-btn-service' type="button" onClick={() => handleAddOnServices('carpetCleaning')}>
                                        <img className='service-logo-svg' src="/assets/service-logos/vacuum-cleaner.svg" alt="vacuum icon"/>
                                    </button>
                                </div>
                                <div>
                                    <button className='form-btn-service' type="button" onClick={() => handleAddOnServices('ironing')}>
                                        <img className='service-logo-svg' src="/assets/service-logos/iron.svg" alt="iron icon"/>
                                    </button>
                                </div>
                            </div>
                        </section>
                        <section id="clientDetails" className='flex flex-col'>
                            <div className='pb-5 space-y-5'>
                                <h3 className='text-lg md:text-2xl lg:text-4xl font-heading text-black-heading'>Address</h3>
                            </div>
                            <div className="flex flex-wrap -m-2">
                                <div className="w-1/2 p-2">
                                    <div className="relative">
                                    <label htmlFor="firstName" className="text-sm leading-7 text-gray-600">First Name</label>
                                    <input required type="firstName" id="firstName" name="firstName" className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 border border-gray-300 rounded outline-none focus:border-indigo-500" />
                                    </div>
                                </div>
                                <div className="w-1/2 p-2">
                                    <div className="relative">
                                    <label htmlFor="surname" className="text-sm leading-7 text-gray-600">Surname</label>
                                    <input required type="text" id="surname" name="surname" className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 border border-gray-300 rounded outline-none focus:border-indigo-500" />
                                    </div>
                                </div>
                                <div className="w-1/2 p-2">
                                    <div className="relative">
                                    <label htmlFor="streetAddress" className="text-sm leading-7 text-gray-600">Street Address</label>
                                    <input required type="streetAddress" id="streetAddress" name="streetAddress" className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 border border-gray-300 rounded outline-none focus:border-indigo-500" />
                                    </div>
                                </div>
                                <div className="w-1/2 p-2">
                                    <div className="relative">
                                    <label htmlFor="apartmentNumber" className="text-sm leading-7 text-gray-600">Apartment Number</label>
                                    <input type="text" id="apartmentNumber" name="apartmentNumber" className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 border border-gray-300 rounded outline-none focus:border-indigo-500" />
                                    </div>
                                </div>
                                <div className="w-1/2 p-2">
                                    <div className="relative">
                                    <label htmlFor="city" className="text-sm leading-7 text-gray-600">City</label>
                                    <input required type="city" id="city" name="city" className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 border border-gray-300 rounded outline-none focus:border-indigo-500" />
                                    </div>
                                </div>
                                <div className="w-1/2 p-2">
                                    <div className="relative">
                                    <label htmlFor="phoneNumber" className="text-sm leading-7 text-gray-600">Phone Number</label>
                                    <input required type="text" id="phoneNumber" name="phoneNumber" className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 border border-gray-300 rounded outline-none focus:border-indigo-500" />
                                    </div>
                                </div>
                                <div className="w-1/2 p-2">
                                    <div className="relative">
                                    <label htmlFor="emailAddress" className="text-sm leading-7 text-gray-600">Email Address</label>
                                    <input required type="text" id="emailAddress" name="emailAddress" className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 border border-gray-300 rounded outline-none focus:border-indigo-500" />
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div id='detailsConfirm' className="sticky flex flex-col justify-between px-5 pt-10 pb-12 space-y-5 md:col-span-1 bg-white-secondary top-20 h-52">
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
                        <button type='submit' className="inline-flex items-center justify-center px-3 py-1 my-5 text-base font-semibold border-0 rounded text-blue-primary bg-blue-shadowOne focus:outline-none hover:bg-blue-shadowTwo ">
                            Confirm Booking
                        </button>
                    </div>
                </form>
            </div>
        </Layout>
    )
}

export default book
