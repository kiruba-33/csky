import React from 'react'

function App() {
  return (
    <div className="min-h-[100svh] bg-white text-[#252525] flex flex-col justify-between selection:bg-[#F47756]/20 selection:text-[#252525]">
      {/* Top spacer matching footer height for optical vertical centering */}
      <div className="w-full flex-shrink-0 h-10 sm:h-12" aria-hidden="true" />

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 py-4 sm:py-8 w-full">
        <section className="w-full max-w-3xl mx-auto flex flex-col items-center text-center animate-fade-in">
          {/* SKY Architects Original Logo on clean transparent background */}
          <div className="w-full flex justify-center mb-6 sm:mb-8 md:mb-10">
            <img
              src="/images/sky-architects-logo.png"
              alt="SKY Architects logo"
              width="1024"
              height="493"
              className="w-full max-w-[280px] xs:max-w-[340px] sm:max-w-[420px] md:max-w-[490px] lg:max-w-[540px] h-auto object-contain select-none pointer-events-none"
              loading="eager"
            />
          </div>

          {/* Text Content */}
          <div className="flex flex-col items-center max-w-xl px-2">
            {/* Small status label */}
            <div className="inline-flex items-center gap-2 mb-3 sm:mb-4">
              <span
                className="w-1.5 h-1.5 rounded-full bg-[#F47756] shrink-0"
                aria-hidden="true"
              />
              <span className="text-xs sm:text-[13px] font-medium tracking-[0.22em] text-[#F47756] uppercase">
                COMING SOON
              </span>
            </div>

            {/* Main heading */}
            <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-semibold tracking-wide text-[#252525] uppercase leading-[1.25] mb-3 sm:mb-4">
              OUR WEBSITE IS UNDER CONSTRUCTION
            </h1>

            {/* Supporting text */}
            <p className="text-sm sm:text-base md:text-[17px] text-[#686868] font-normal leading-relaxed max-w-lg mb-3 sm:mb-4">
              We&apos;re working on something exceptional. Our new website will be launching soon.
            </p>

            {/* Small closing line */}
            <p className="text-xs sm:text-sm tracking-wide text-[#686868] font-medium">
              Stay tuned.
            </p>
          </div>
        </section>
      </main>

      {/* Minimal Footer */}
      <footer className="w-full py-5 sm:py-6 px-4 flex-shrink-0 text-center border-t border-[#E5E5E5]/60">
        <p className="text-xs sm:text-[13px] text-[#686868] font-normal tracking-wide">
          Designed &amp; Developed by{' '}
          <a
            href="https://www.navipromotions.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#F47756] font-medium transition-colors duration-200 hover:text-[#d95d3c] hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#F47756] focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded-sm"
          >
            Navi Promotions
          </a>
        </p>
      </footer>
    </div>
  )
}

export default App