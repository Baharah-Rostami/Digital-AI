import { User, Mail, Send} from "lucide-react"
import toast from "react-hot-toast";

export default function Contact() {
    
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "6b161f7c-44ac-4adb-ae72-a94e86696e1e");

    try {
          const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if(data.success){
        toast.success('Thanks for your submision');
        event.target.reset();
    }else{
        toast.error(data.message)
    }
    } catch (error) {
         toast.error(error.message);
    }
  
  };
  
    return (
        <div id="contact" className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white dark:bg-black">
            <h2 className="text-xl sm:text-5xl font-medium">Get In Touch</h2>
            <p className="max-w-lg text-center text-gray-500 dark:text-white/75 mb-6">Reach out today and let's discuss how we can help your business grow and succeed online.</p>
            
            <form onSubmit={onSubmit}
            className=" grid sm:grid-cols-2 gap-5 w-full max-w-3xl p-8 rounded-3xl backdrop-blur-m bg-white/80 dark:bg-zinc-900/80
             border border-white/20 dark:border-zinc-800 shadow-xl">
                <div className="flex items-center gap-2 px-3 rounded-lg border border-gray-300 dark:border-gray-600">
                    <User size={18} className="text-gray-500" />
                    <input
                        type="text"
                         name="name"
                        placeholder="Enter your name"
                        className="w-full py-3 text-sm outline-none bg-transparent"
                        required
                    />
                </div>

                <div className="flex items-center gap-2 px-3 rounded-lg border border-gray-300 dark:border-gray-600">
                    <Mail size={18} className="text-gray-500" />
                    <input
                        type="email"
                         name="email"
                        placeholder="Enter your email"
                        className="w-full py-3 text-sm outline-none bg-transparent"
                        required
                    />
                </div>

                <div className="sm:col-span-2">
                    <p className="mb-2 text-sm font-medium">Message</p>
                    <textarea rows={8} name="message" placeholder="Enter your message" className="w-full p-3 text-sm
                    outline-none rounded-lg border border-gray-300 dark:border-gray-600" required/>
                </div>
                <button type="submit"
                    className="sm:col-span-2 mx-auto flex items-center gap-2 px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white
                    font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
                    <Send size={18} />
                    Send Message
                </button>
            </form>
        </div>
    )
}
