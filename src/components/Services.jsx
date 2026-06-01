import ServiceCard from "./ServiceCard"
import { serviceCardIcons } from "../Images/Images"

export default function Services() {
    const serviceData = [
        {
            title: "Advertising",
            description: "Elevate your brand with Digital AI. We create stunning websites, powerful digital experiences, and innovative solutions that drive results.",
            icon: serviceCardIcons[0],
        },
        {
            title: "Content marketing",
            description: "Turn ideas into impact with strategic content marketing designed to attract, inform, and convert your target audience.",
           icon: serviceCardIcons[1]
        },
        {
            title: "Content writing",
            description: "Professional content writing tailored to your brand, delivering compelling stories that inform, engage, and inspire action.",
            icon: serviceCardIcons[2]
        },
        {
            title: "social media",
            description: "Grow your brand online with strategic social media marketing that boosts engagement, increases visibility, and connects you with your audience.",
           icon: serviceCardIcons[3]
        },
    ]
    return (
        <div id="services" className="relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:bg-black dark:text-white">
            <h2 className="text-xl sm:text-5xl font-medium">How can we help?</h2>
            <p className="max-w-lg text-center text-gray-500 dark:text-white/75 mb-6">From web development to digital marketing, we provide the expertise and tools needed to strengthen your online presence.</p>
            
            <div className="flex flex-col md:grid grid-cols-2">
                {serviceData.map((service, index)=>(
                    <ServiceCard key={index} service={service} index={index}/>
                ))}
            </div>
        </div>
    )
}
