import { teamMembers } from "../assets/team";

export default function Teams() {
  return (
    <div className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-800 dark:bg-black dark:text-white">
         <h2 className="text-xl sm:text-5xl font-medium">Meet the team</h2>
            <p className="max-w-lg text-center text-gray-500 dark:text-white/75 mb-6">A passionate team of digital experts dedicated to your brands success.</p>
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
              {teamMembers.map((team, index)=>(
                <div key={index} className="flex max-sm:flex-col items-center gap-5 p-4 rounded-xl border border-gray-100
                dark:border-gray-700 bg-white dark:bg-gray-900 shadow-xl shadow-gray-100 dark:shadow-white/5 
                hover:scale-105 transition-all duration-400 ">
                  <img src={team.image} className="h-12 w-12 rounded-full" alt="" />

                  <div className="flex-1">
                    <h3 className="font-bold text-sm">{team.name}</h3>
                    <p className="text-xs opacity-60">{team.title}</p>
                  </div>
                </div>
              ))}
            </div>
    </div>
  )
}
