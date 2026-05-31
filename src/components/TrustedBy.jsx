import { company_logos } from "../Images/Images"

export default function TrustedBy() {
    return (
        <div className="flex flex-col items-center px-4 sm:px-12 lg:px-24 xl:px-40 gap-10 text-gray-700 dark:text-white/80 dark:bg-black">
            <h3 className="font-semibold">Trusted by Leading Companies</h3>
            <div className="flex items-center justify-center flex-wrap gap-10 m-4">
                {company_logos.map((logo, index) => (
                    <div key={index} className="w-32 h-16 flex items-center justify-center">
                        <img src={logo} alt="" className="max-w-full max-h-full object-contain" />
                    </div>
                ))}
            </div>
        </div>
    )
}
