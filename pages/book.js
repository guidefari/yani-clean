import React, { useState } from 'react';
import Layout from '../components/layout';

const book = () => {
  const [typeOfService, setTypeOfService] = useState('regular');
  const [propertyType, setPropertyType] = useState('studio');
  const [propertySize, setPropertySize] = useState({ bed: 1, bath: 1 });
  const [serviceFrequency, setServiceFrequency] = useState('Weekly');
  const [addOnServices, setAddOnServices] = useState([]);

  const handleAddOnServices = (serviceYacho) => {
    if (!addOnServices.includes(serviceYacho)) {
      // if not in Array, add it
      setAddOnServices([...addOnServices, serviceYacho]);
    } else {
      // if in Array,remove that sucker
      const indexOfItemInArray = addOnServices.findIndex(
        (item) => item === serviceYacho
      );
      addOnServices.splice(indexOfItemInArray, 1);
      setAddOnServices([...addOnServices]);
    }
  };

  const handlePropertyType = (type) => {
    switch (type) {
      case 'studio':
        setPropertyType('studio');
        setPropertySize({ bed: 1, bath: 1 });
        break;
      case 'notStudio':
        setPropertyType('notStudio');
        setPropertySize({ bed: 2, bath: 1 });
        break;
      case 'Office':
        setPropertyType('Office');
        setPropertySize({ bed: 0, bath: 0 });
        break;
      case 'Industrial Site':
        setPropertyType('Industrial Site');
        setPropertySize({ bed: 0, bath: 0 });
        break;
      default:
        break;
    }
  };

  console.log(propertySize.bed);

  return (
    <Layout>
      <div className="container flex flex-col items-center justify-center min-h-xs">
        <div className="flex items-center justify-center pt-4 pb-8">
          <h1 className="text-xl underline md:text-3xl lg:text-5xl font-headingSecondary text-black-heading">
            Make Booking
          </h1>
        </div>
        <form
          name="booking"
          method="POST"
          data-netlify="true"
          className="grid grid-cols-1 md:grid-cols-3 md:gap-4 "
        >
          <>
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" defaultValue="booking" />
            <input type="hidden" name="property-type" value={propertyType} />
            <input
              type="hidden"
              name="property-size-bed"
              value={propertySize.bed}
            />
            <input
              type="hidden"
              name="property-size-bath"
              value={propertySize.bath}
            />
            <input type="hidden" name="type-of-service" value={typeOfService} />
            <input
              type="hidden"
              name="service-frequency"
              value={serviceFrequency}
            />
            <input type="hidden" name="addOnServices" value={addOnServices} />
          </>
          <div
            id="detailsInput"
            className="max-w-lg px-8 py-10 space-y-10 rounded-md md:max-w-md md:mb-20 md:col-span-2 lg:max-w-xl bg-white-true"
          >
            <section id="typeOfServiceWrapper" className="flex flex-col">
              <div className="pb-5 space-y-5">
                <h3 className="text-lg md:text-2xl lg:text-4xl font-heading text-black-heading">
                  Type of Service
                </h3>
                <p className="text-sm">
                  Do you need regular cleaning services or a once off, end of
                  tenancy cleaning?
                </p>
              </div>
              <div className="flex items-center justify-center space-x-10 ">
                <button
                  className="leading-4 form-btn"
                  type="button"
                  value="regular"
                  onClick={() => setTypeOfService('regular')}
                >
                  Regular Service
                </button>
                <button
                  className="leading-4 form-btn"
                  type="button"
                  value="endOfTenancy"
                  onClick={() => setTypeOfService('endOfTenancy')}
                >
                  End of Tenancy
                </button>
              </div>
            </section>
            <section id="propertySizeWrapper" className="flex flex-col">
              <div className="pb-5 space-y-5">
                <h3 className="text-lg md:text-2xl lg:text-4xl font-heading text-black-heading">
                  Property Size
                </h3>
                <p className="text-sm">
                  Studio flat or a home with more than one bedroom and bathroom
                </p>
              </div>
              <div className="flex items-center justify-center space-x-10 ">
                <button
                  className="form-btn"
                  type="button"
                  onClick={() => handlePropertyType('notStudio')}
                >
                  2+ Bed
                </button>
                <button
                  className="form-btn"
                  type="button"
                  onClick={() => handlePropertyType('studio')}
                >
                  Studio
                </button>
                <button
                  className="form-btn"
                  type="button"
                  onClick={() => handlePropertyType('Office')}
                >
                  Office
                </button>
                <button
                  className="form-btn"
                  type="button"
                  onClick={() => handlePropertyType('Industrial Site')}
                >
                  Industrial Site
                </button>
              </div>
              {propertyType === 'notStudio' && (
                <div className="flex items-center justify-center pt-5 space-x-10">
                  <div>
                    <label
                      htmlFor="bedrooms"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Bedrooms
                    </label>
                    <input
                      type="number"
                      name="bedrooms"
                      id="bedrooms"
                      min={0}
                      className="number-input"
                      onChange={(e) =>
                        setPropertySize({
                          ...propertySize,
                          bed: Number(e.target.value),
                        })
                      }
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="bathrooms"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Bathrooms
                    </label>
                    <input
                      type="number"
                      name="bathrooms"
                      id="bathrooms"
                      min={0}
                      className="number-input"
                      onChange={(e) =>
                        setPropertySize({
                          ...propertySize,
                          bath: Number(e.target.value),
                        })
                      }
                    />
                  </div>
                </div>
              )}
            </section>
            {typeOfService === 'regular' && (
              <section id="serviceFrequencyWrapper" className="flex flex-col">
                <div className="pb-5 space-y-5">
                  <h3 className="text-lg md:text-2xl lg:text-4xl font-heading text-black-heading">
                    Service Frequency
                  </h3>
                  <p className="text-sm">
                    How often will you need cleaning services?
                  </p>
                </div>
                <div className="flex items-center justify-center mt-2 space-x-5 sm:space-x-10">
                  <div>
                    <button
                      className="form-btn"
                      type="button"
                      onClick={() => setServiceFrequency('Weekly')}
                    >
                      Weekly
                    </button>
                  </div>
                  <div>
                    <button
                      className="form-btn"
                      type="button"
                      onClick={() => setServiceFrequency('BiWeekly')}
                    >
                      BiWeekly
                    </button>
                  </div>
                  <div>
                    <button
                      className="form-btn"
                      type="button"
                      onClick={() => setServiceFrequency('Monthly')}
                    >
                      Monthly
                    </button>
                  </div>
                </div>
              </section>
            )}
            <section id="addOnServicesWrapper" className="flex flex-col">
              <div className="pb-5 space-y-5">
                <h3 className="text-lg md:text-2xl lg:text-4xl font-heading text-black-heading">
                  Add on Services
                </h3>
                <p className="text-sm">
                  Do you need any extras for your booking?
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-center mt-2 space-x-5 lg:space-x-7">
                <div className="flex flex-col items-center justify-between pb-1 space-y-2">
                  <button
                    className="form-btn-service"
                    type="button"
                    onClick={() => handleAddOnServices('Stove')}
                  >
                    <img
                      className="service-logo-svg"
                      src="/assets/service-logos/gas-stove.svg"
                      alt="stove icon"
                    />
                  </button>
                  <span className="text-xs text-gray-400 ">Inside Stove</span>
                </div>
                <div className="flex flex-col items-center justify-between pb-1 space-y-2">
                  <button
                    className="text-blue-700 form-btn-service"
                    type="button"
                    onClick={() => handleAddOnServices('Closet')}
                  >
                    <img
                      className="service-logo-svg"
                      src="/assets/service-logos/closet.svg"
                      alt="closet icon"
                    />
                  </button>
                  <span className="text-xs text-gray-400 ">Inside Closet</span>
                </div>
                <div className="flex flex-col items-center justify-between pb-1 space-y-2">
                  <button
                    className="form-btn-service"
                    type="button"
                    onClick={() => handleAddOnServices('Fridge')}
                  >
                    <img
                      className="service-logo-svg"
                      src="/assets/service-logos/fridge.svg"
                      alt="fridge icon"
                    />
                  </button>
                  <span className="text-xs text-gray-400 ">Inside Fridge</span>
                </div>
                <div className="flex flex-col items-center justify-between pb-1 space-y-2">
                  <button
                    className="form-btn-service"
                    type="button"
                    onClick={() => handleAddOnServices('Carpet Cleaning')}
                  >
                    <img
                      className="service-logo-svg"
                      src="/assets/service-logos/vacuum-cleaner.svg"
                      alt="vacuum icon"
                    />
                  </button>
                  <span className="text-xs text-gray-400 ">
                    Carpet Cleaning
                  </span>
                </div>
                <div className="flex flex-col items-center justify-between pb-1 space-y-2">
                  <button
                    className="form-btn-service"
                    type="button"
                    onClick={() => handleAddOnServices('Ironing')}
                  >
                    <img
                      className="service-logo-svg"
                      src="/assets/service-logos/iron.svg"
                      alt="iron icon"
                    />
                  </button>
                  <span className="text-xs text-gray-400 ">Ironing</span>
                </div>
              </div>
            </section>
            <section id="clientDetails" className="flex flex-col">
              <div className="pb-5 space-y-5">
                <h3 className="text-lg md:text-2xl lg:text-4xl font-heading text-black-heading">
                  Address
                </h3>
              </div>
              <div className="flex flex-wrap -m-2">
                <div className="w-1/2 p-2">
                  <div className="relative">
                    <label
                      htmlFor="firstName"
                      className="text-xs leading-7 text-gray-600 lg:text-sm"
                    >
                      First Name
                    </label>
                    <input
                      required
                      type="firstName"
                      id="firstName"
                      name="firstName"
                      className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 border border-gray-300 rounded outline-none focus:border-indigo-500"
                    />
                  </div>
                </div>
                <div className="w-1/2 p-2">
                  <div className="relative">
                    <label
                      htmlFor="surname"
                      className="text-xs leading-7 text-gray-600 lg:text-sm"
                    >
                      Surname
                    </label>
                    <input
                      required
                      type="text"
                      id="surname"
                      name="surname"
                      className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 border border-gray-300 rounded outline-none focus:border-indigo-500"
                    />
                  </div>
                </div>
                <div className="w-1/2 p-2">
                  <div className="relative">
                    <label
                      htmlFor="streetAddress"
                      className="text-xs leading-7 text-gray-600 lg:text-sm"
                    >
                      Street Address
                    </label>
                    <input
                      required
                      type="streetAddress"
                      id="streetAddress"
                      name="streetAddress"
                      className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 border border-gray-300 rounded outline-none focus:border-indigo-500"
                    />
                  </div>
                </div>
                <div className="w-1/2 p-2">
                  <div className="relative">
                    <label
                      htmlFor="apartmentNumber"
                      className="text-xs leading-7 text-gray-600 lg:text-sm"
                    >
                      Apartment Number
                    </label>
                    <input
                      type="text"
                      id="apartmentNumber"
                      name="apartmentNumber"
                      className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 border border-gray-300 rounded outline-none focus:border-indigo-500"
                    />
                  </div>
                </div>
                <div className="w-1/2 p-2">
                  <div className="relative">
                    <label
                      htmlFor="city"
                      className="text-xs leading-7 text-gray-600 lg:text-sm"
                    >
                      City
                    </label>
                    <input
                      required
                      type="city"
                      id="city"
                      name="city"
                      className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 border border-gray-300 rounded outline-none focus:border-indigo-500"
                    />
                  </div>
                </div>
                <div className="w-1/2 p-2">
                  <div className="relative">
                    <label
                      htmlFor="phoneNumber"
                      className="text-xs leading-7 text-gray-600 lg:text-sm"
                    >
                      Phone Number
                    </label>
                    <input
                      required
                      type="text"
                      id="phoneNumber"
                      name="phoneNumber"
                      className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 border border-gray-300 rounded outline-none focus:border-indigo-500"
                    />
                  </div>
                </div>
                <div className="w-1/2 p-2">
                  <div className="relative">
                    <label
                      htmlFor="emailAddress"
                      className="text-xs leading-7 text-gray-600 lg:text-sm"
                    >
                      Email Address
                    </label>
                    <input
                      required
                      type="text"
                      id="emailAddress"
                      name="emailAddress"
                      className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 border border-gray-300 rounded outline-none focus:border-indigo-500"
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div
            id="detailsConfirm"
            className="sticky flex flex-col justify-between px-5 pt-10 pb-12 space-y-5 rounded-md md:col-span-1 bg-blue-shadowTwo top-20 h-52"
          >
            <section>
              <h3 className="text-sm font-heading text-black-heading">
                {typeOfService === 'regular'
                  ? `${serviceFrequency} Cleaning Plan`
                  : `End of Tenancy Cleaning Plan`}{' '}
              </h3>
              <div className="text-xs">
                {propertyType === 'studio' || propertyType === 'notStudio' ? (
                  <span>
                    {propertySize.bed} bed, {propertySize.bath} bath
                  </span>
                ) : (
                  <span>{propertyType}</span>
                )}
              </div>
            </section>
            {addOnServices.length > 0 && (
              <section>
                <h3 className="text-sm font-heading text-black-heading">
                  Add on Services{' '}
                </h3>
                <div className="flex flex-row flex-wrap space-x-3 text-xs">
                  {addOnServices.map((service) => (
                    <span>{service}</span>
                  ))}
                </div>
              </section>
            )}
            <button
              type="submit"
              className="inline-flex items-center justify-center px-3 py-1 my-5 text-base font-semibold border-0 rounded hover:shadow-md basic-animation text-blue-primary bg-blue-shadowOne focus:outline-none hover:ring-2 hover:bg-blue-shadowTwo "
            >
              Confirm Booking
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default book;
