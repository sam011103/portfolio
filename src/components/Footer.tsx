import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { Github, Linkedin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="p-4 w-full bg-gray-900 ">
            {/* <div className="flex justify-evenly mb-6 gap-6">
                <span className="text-white">Email: samheng2045@gmail.com</span>
                <span className="text-white">Whatsapp: 011-24732768</span>
            </div>
            <div className="flex justify-evenly mb-6 gap-6">
                <span className="text-white">Github: sam011103</span>
                <span className="text-white">LinkedIn: sam011103</span>
            </div> */}
            <div className="flex flex-col sm:grid grid-cols-2 gap-x-12 gap-y-4 sm:gap-y-6 sm:w-2/3 mx-auto my-4 sm:my-6">
                <span className="text-white flex items-center text-sm sm:text-base">
                    <EnvelopeIcon className="inline-block size-6 mr-2" />
                    Email: samheng2045@gmail.com
                </span>
                <span className="text-white flex items-center text-sm sm:text-base">
                    <PhoneIcon className="inline-block size-6 mr-2" />
                    Whatsapp: 011-24732768
                </span>

                <span className="text-white flex items-center text-sm sm:text-base">
                    <Github className="mr-2" />
                    GitHub: 
                    <a href="https://github.com/sam011103" className="ml-2">https://github.com/sam011103</a>
                </span>
                <span className="text-white flex items-center text-sm sm:text-base">
                    <Linkedin className="mr-2" />
                    LinkedIn: 
                    <a href="https://www.linkedin.com/in/sam011103" className="ml-2">https://www.linkedin.com/in/sam011103</a>
                </span>
            </div>
            <div className="flex w-full justify-center items-center">
                <span className="text-white text-sm sm:text-base">
                    © {new Date().getFullYear()} Sam Heng Zi Sam. All rights reserved.
                </span>
            </div>
        </footer>
    )
}

