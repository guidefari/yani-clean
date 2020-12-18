const Feature = () => {
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-black-heading sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-yellow-300 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="07690130-d013-42bc-83f4-90de7ac68f76"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#07690130-d013-42bc-83f4-90de7ac68f76)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">Why</span>
            </span>{' '}
            choose us
          </h2>
        </div>
        <div className="grid max-w-screen-lg mx-auto space-y-6 lg:grid-cols-2 lg:space-y-0 lg:divide-x">
          <div className="space-y-6 sm:px-16">
            <div className="flex flex-col max-w-md sm:flex-row">
              <div className="mb-4 mr-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                  <svg
                    className="w-8 h-8 text-deep-purple-accent-400 sm:w-10 sm:h-10"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h6 className="mb-3 text-xl font-bold leading-5">
                    Reliability
                </h6>
                <p className="text-sm text-gray-900">
                    Enjoy flawless efficiency that is on time, every time.
                </p>
              </div>
            </div>
            <div className="flex flex-col max-w-md sm:flex-row">
              <div className="mb-4 mr-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                  <svg
                    className="w-8 h-8 text-deep-purple-accent-400 sm:w-10 sm:h-10"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h6 className="mb-3 text-xl font-bold leading-5">
                    Convenience
                </h6>
                <p className="text-sm text-black-heading">
                    Our service takes the weight off your shoulders, working at the time that best suits you. We cater our service to your convenience.
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-6 sm:px-16">
            <div className="flex flex-col max-w-md sm:flex-row">
              <div className="mb-4 mr-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                  <svg
                    className="w-8 h-8 text-deep-purple-accent-400 sm:w-10 sm:h-10"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h6 className="mb-3 text-xl font-bold leading-5">
                    Flexibility
                </h6>
                <p className="text-sm text-gray-900">
                    Our work is all about your convenience, so we go all out to suit your schedule and preferences. Whatever you specify, we’ll meet it.
                </p>
              </div>
            </div>
            <div className="flex flex-col max-w-md sm:flex-row">
              <div className="mb-4 mr-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                  <svg
                    className="w-8 h-8 text-deep-purple-accent-400 sm:w-10 sm:h-10"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h6 className="mb-3 text-xl font-bold leading-5">
                    Experience
                </h6>
                <p className="text-sm text-gray-900">
                    We hire dedicated and experienced cleaners for the ultimate service. Rest easy and get total satisfaction from proven pros who know just what to do.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default Feature