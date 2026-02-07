// import React from "react";
// import { Linkedin, Twitter } from "lucide-react";
// import footer from '../assets/footer-img.png'

// const Footer = () => {
//     return (
//         <footer className="bg-gray-900 text-gray-300 pt-12">
//             <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
//                 {/* Map / Location */}
//                 <div className="flex flex-col items-center md:items-start justify-center items-center" >
//                     <div className=" w-40 h-24 relative rounded-md bg-cover bg-center bg-no-repeat flex justify-center items-center" style={{ backgroundImage: `url(${footer})`}}>
//                         <p className="absolute inset-0 flex items-center justify-center text-white text-lg text-center p-2 whitespace-nowrap">
//                             Made with ❤️ in San Francisco
//                         </p>
//                     </div>
//                 </div>

//                 {/* Products */}
//                 <div>
//                     <h4 className="text-white font-semibold mb-4">Products</h4>
//                     <ul className="space-y-2">
//                         <li>Delta</li>
//                         <li>Sigma</li>
//                         <li>Zeta</li>
//                         <li>Alpha</li>
//                         <li>Acumen</li>
//                     </ul>
//                 </div>

//                 {/* Resources */}
//                 <div>
//                     <h4 className="text-white font-semibold mb-4">Resources</h4>
//                     <ul className="space-y-2">
//                         <li>Help</li>
//                         <li>Training Videos</li>
//                         <li>Webinars</li>
//                         <li>Request a Demo</li>
//                         <li>Create Surveys</li>
//                         <li>Quiz Maker</li>
//                     </ul>
//                 </div>

//                 {/* Company */}
//                 <div>
//                     <h4 className="text-white font-semibold mb-4">Company</h4>
//                     <ul className="space-y-2">
//                         <li>About Us</li>
//                         <li>Careers</li>
//                         <li>Team</li>
//                         <li>Contact Us</li>
//                     </ul>
//                 </div>
//             </div>

//             <div className="border-t border-gray-700 mt-8 pt-4 max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
//                 <p>© 2022 Circle. All rights reserved.</p>
//                 <div className="flex space-x-4 mt-2 md:mt-0">
//                     <Linkedin size={18} />
//                     <Twitter size={18} />
//                 </div>
//                 <div className="flex space-x-4 mt-2 md:mt-0">
//                     <span>Privacy Policy</span>
//                     <span>Data & Security</span>
//                     <span>Terms of Service</span>
//                 </div>
//             </div>
//         </footer>
//     );
// };

// export default Footer;










import React from "react";
import { Linkedin, Twitter } from "lucide-react";
import footer from '../assets/footer-img.png'

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 pt-12">
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
                
                {/* Map / Location */}
                <div className="flex flex-col items-center md:items-start justify-center">
                    <div 
                        className="w-40 h-24 relative rounded-md bg-cover bg-center bg-no-repeat flex justify-center items-center" 
                        style={{ backgroundImage: `url(${footer})` }}
                    >
                        <p className="absolute inset-0 flex items-center justify-center text-white text-sm  md:p-0 lg:text-lg text-center p-5 whitespace-nowrap">
                            Made with ❤️ in San Francisco
                        </p>
                    </div>
                </div>

                {/* Products */}
                <div>
                    <h4 className="text-white font-semibold mb-4">Products</h4>
                    <ul className="space-y-2">
                        {["Delta","Sigma","Zeta","Alpha","Acumen"].map((item, index) => (
                            <li key={index}>
                                <a 
                                    href="#"
                                    className="hover:text-[#0CBBC7] transition-colors duration-300"
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Resources */}
                <div>
                    <h4 className="text-white font-semibold mb-4">Resources</h4>
                    <ul className="space-y-2">
                        {["Help","Training Videos","Webinars","Request a Demo","Create Surveys","Quiz Maker"].map((item,index)=>(
                            <li key={index}>
                                <a 
                                    href="#"
                                    className="hover:text-[#0CBBC7] transition-colors duration-300"
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Company */}
                <div>
                    <h4 className="text-white font-semibold mb-4">Company</h4>
                    <ul className="space-y-2">
                        {["About Us","Careers","Team","Contact Us"].map((item,index)=>(
                            <li key={index}>
                                <a 
                                    href="#"
                                    className="hover:text-[#0CBBC7] transition-colors duration-300"
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t py-3 border-gray-700 mt-8 pt-4 max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                <p>© 2022 Circle. All rights reserved.</p>

                {/* Social Icons */}
                <div className="flex space-x-4 mt-2 md:mt-0">
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <Linkedin size={18} className="hover:text-[#0CBBC7] transition-colors duration-300" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <Twitter size={18} className="hover:text-[#0CBBC7] transition-colors duration-300" />
                    </a>
                </div>

                <div className="flex space-x-4 mt-2 md:mt-0">
                    {["Privacy Policy","Data & Security","Terms of Service"].map((item,index)=>(
                        <a 
                            key={index} 
                            href="#"
                            className="hover:text-[#0CBBC7] transition-colors duration-300"
                        >
                            {item}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
