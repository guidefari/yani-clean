import Link from "next/link";

function Header() {
    return (
        <>
        <header className=" body-font">
            <div className="container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row md:px-12 lg:px-20">
                <Link href='/' className="flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0">
                    <img className='w-32 cursor-pointer h-14' src="/assets/logofill.svg" alt="Yani Clean logo"/>
                </Link>
                <nav className="flex flex-wrap items-center justify-center space-x-4 text-base md:ml-auto">
                    <Link href='/about' className="mr-5 hover:text-gray-900">About</Link>
                    <Link href='/work4us' className="mr-5 hover:text-gray-900">Work for us</Link>
                    <Link href='/book'>
                        <button className="inline-flex items-center px-3 py-1 text-base font-semibold border-0 rounded text-blue-primary bg-blue-shadowOne focus:outline-none hover:bg-blue-shadowTwo ">
                            Book Now
                        </button>
                    </Link>
                </nav>
            </div>
        </header>
        </>
    );
}

export default Header;