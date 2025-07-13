const HeroSection = () => {
    return (
      <section className="relative -z-50 h-[650px] overflow-hidden text-white">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            src="https://novalab.bold-themes.com/lab-l/wp-content/uploads/sites/10/2020/06/Microscope_4__Rotate__Videvo.mp4"
            type="video/mp4"
          />
        </video>
  
        {/* Overlay (optional dark filter) */}
        <div className="absolute inset-0 bg-black/50 z-0"></div>
  
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            VIRADIOLOGY <br /> LABORATORY SERVICES
          </h1>
          <p className="mt-4 text-lg max-w-2xl">
            Ensuring the delivery of reliable, validated data,<br />
            and therefore safer product to market.
          </p>
          <button className="mt-6 z-50 cursor-pointer px-6 py-3 bg-rose-600 hover:bg-rose-800 transition rounded-md font-semibold">
            FIND OUT MORE
          </button>
        </div>
  
        {/* Bottom Triangle Shape */}
        <svg
          className="absolute bottom-0 left-0 w-full h-24 z-10"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <polygon points="0,0 50,100 100,0 100,100 0,100" fill="#f2f8fd" />
        </svg>
      </section>
    );
  };
  
  export default HeroSection;
  