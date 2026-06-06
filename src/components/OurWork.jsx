import { LatestWorkImg } from "../Images/Images";

export default function OurWork() {
    const workData = [
  {
    title: "Digital AI",
    description: "A modern digital agency website built with React.",
    image: LatestWorkImg.DigitalAI
  },
  {
    title: "World Explorer",
    description: "A Next.js application for exploring countries around the world.",
    image: LatestWorkImg.workExplorer,
  },
  {
    title: "NaxaShop",
    description: "A responsive e-commerce website with modern UI design.",
    image: LatestWorkImg.nexaShop,
  },
];
  return (
    <div id="work" className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white dark:bg-black">
         <h2 className="text-xl sm:text-5xl font-medium">Our latest Work </h2>
            <p className="max-w-lg text-center text-gray-500 dark:text-white/75 mb-6">A responsive and engaging web platform showcasing digital marketing, content creation, and AI-driven services.</p>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
                {workData.map((work, index)=> (
                    <div key={index} className="hover:scale-102 duration-500 transition-all cursor-pointer">
                        <img src={work.image} alt="" className="w-full rounded-xl shadow-md hover:shadow-xl hover:scale-[1.02] transition duration-300 object-cover"/>
                        <h3 className="mt-3 mb-2 text-lg font-semibold">{work.title}</h3>
                        <p className="text-sm opacity-60 w-5/6">{work.description}</p>
                    </div>
                ))}
            </div>
    </div>
  )
}
