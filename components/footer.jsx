import { Mail, PhoneCall } from "react-feather";

function Footer() {
  return (
    <footer className="flex items-center justify-center py-8 bg-blue-900 text-white-true">
        <main className="flex flex-col items-center justify-between max-w-3xl p-4 mx-auto space-y-5 md:p-8">
          <img className='inline-block h-20 max-w-xs sm:h-28' src="/assets/logo-twi.svg" alt=""/>
          <p className='text-sm sm:text-base'>St James House, Pendleton, Salford, Manchester</p>
          <div className='flex space-x-5'>
            <a href="tel:+442034413037">
              <PhoneCall className='inline-block hover:text-yellow-primary'/>
            </a>
            <a href="mailto:info@yanicleaningservices.co.uk">
              <Mail className='inline-block hover:text-yellow-primary'/>
            </a>
          </div>
          <aside className='text-xs text-gray-400'>2020 © Yani Cleaning Services. All Rights Reserved.</aside>
        </main>
      </footer>
  )
}

export default Footer
