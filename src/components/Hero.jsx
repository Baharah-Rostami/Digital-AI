import images from "../Images/Images";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center gap-6 pt-28 pb-20 px-4 sm:px-12 lg:px-24 xl:px-40
      text-center w-full overflow-hidden text-gray-700 dark:text-white dark:bg-black">
        
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-sky-500/10 blur-3xl rounded-full" />

      <div className="relative z-10 flex flex-col items-center gap-6">

        <div className="inline-flex items-center gap-2 border border-gray-200 dark:border-white/10
        bg-white/60 dark:bg-white/5 backdrop-blur-sm shadow-sm p-1.5 pr-4 rounded-full">
          <img src={images.profileImages} alt="users" className="w-10 h-10 rounded-full object-cover" />
          <p className="text-xs font-medium">Trusted by 10k+ people</p>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-[84px] font-medium xl:leading-[95px] max-w-5xl">
          Turning imagination into{" "}
          <span className="bg-gradient-to-r from-[#5044E5] to-[#4d8cea] bg-clip-text text-transparent">
            digital
          </span>{" "}
          impact.
        </h1>

        <p className="text-sm sm:text-lg font-medium text-gray-500 dark:text-white/75 max-w-2xl pb-2">
          Creating smarter digital experiences for everyone
        </p>

        <div className="flex gap-4">
          <a
            href="#contact"
            className="bg-sky-500 text-white px-6 py-3 rounded-full hover:scale-105 transition">
            Get Started
          </a>

          <a
            href="#work"
            className="border border-gray-300 dark:border-white/20 px-6 py-3 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition">
            View Work
          </a>
        </div>

        <div className="relative w-full max-w-4xl mt-6">
          <img
            src={images.groupDiscuss}
            alt="team discussion"
            className="w-full h-auto object-cover rounded-3xl hover:scale-[1.02] transition duration-500 shadow-xl"/>
        </div>

      </div>
    </section>
  );
}