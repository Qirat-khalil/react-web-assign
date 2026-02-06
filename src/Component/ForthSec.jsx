import React from "react";
import Container from "./Container";
import forthsec1 from '../assets/forthsec1.png'
import forthsec2 from '../assets/forthsec2.png'
import forthsec3 from '../assets/forthsec3.png'
import forthsec4 from '../assets/forthsec4.png'
import forthsec5 from '../assets/forthsec5.png'

import forthsec6 from '../assets/forthsec6.png'
import Button from "./Button";

 const awards = [
  {
    title: "Market leader across 18 categories",
    image: forthsec1, // replace with your own image
    bgColor: "bg-pink-50",
  },
  {
    title: "Most loved SaaS tool in 2021",
    image: forthsec2,
    bgColor: "bg-pink-100",
  },
  {
    title: "Category leader in 2022",
    image: forthsec3,
    bgColor: "bg-cyan-50",
  },
  {
    title: "Most recommended tool in 2021",
    image: forthsec4,
    bgColor: "bg-purple-100",
  },
  {
    title: "Champion in survey tool 2022",
    image: forthsec5,
    bgColor: "bg-yellow-50",
  },
  {
    title: "Top performer spring 2021",
    image: forthsec6,
    bgColor: "bg-pink-50",
  },
];

const ForthSec = () => {
  return (
    <Container className="py-16 ">
      <div className="text-center mb-12">
         <Button name="Award" className="bg-[#dcfbfd] rounded text-lg text-[#0CBBC7] mb-8" />
        <h2 className="text-3xl md:text-4xl font-bold">
          An <span className="font-bold">award winning</span> platform,{" "}
          <span className="font-bold">loved by customers</span>.
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mx-auto ">
        {awards.map((award, index) => (
          <div
            key={index}
            className={`flex flex-col items-center h-80 justify-center items-center text-center p-6 rounded-lg ${award.bgColor}`}
          >
            <img
              src={award.image}
              alt={award.title}
              className="w-24 h-24 object-contain mb-4"
            />
            <p className="font-medium">{award.title}</p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default ForthSec;
























// import React from "react";
// import Container from "./Container";
// import forthsec1 from '../assets/forthsec1.png';
// import forthsec2 from '../assets/forthsec2.png';
// import forthsec3 from '../assets/forthsec3.png';
// import forthsec4 from '../assets/forthsec4.png';
// import forthsec5 from '../assets/forthsec5.png';
// import forthsec6 from '../assets/forthsec6.png';
// import Button from "./Button";

// const awards = [
//     { title: "Market leader across 18 categories", image: forthsec1, bgColor: "bg-pink-50" },
//     { title: "Most loved SaaS tool in 2021", image: forthsec2, bgColor: "bg-pink-100" },
//     { title: "Category leader in 2022", image: forthsec3, bgColor: "bg-cyan-50" },
//     { title: "Most recommended tool in 2021", image: forthsec4, bgColor: "bg-purple-100" },
//     { title: "Champion in survey tool 2022", image: forthsec5, bgColor: "bg-yellow-50" },
//     { title: "Top performer spring 2021", image: forthsec6, bgColor: "bg-pink-50" },
// ];

// const ForthSec = () => {
//     return (
//         <Container>
//             <div className="py-16 flex flex-col items-center">
                
//             {/* Heading */}
//             <div className="text-center mb-12 max-w-4xl">
//                 <Button name="Award" className="bg-[#dcfbfd] rounded text-lg text-[#0CBBC7] mb-4" />
//                 <h2 className="text-3xl md:text-4xl font-bold">
//                     An <span className="font-bold">award winning</span> platform,{" "}
//                     <span className="font-bold">loved by customers</span>.
//                 </h2>
//             </div>

//             {/* Grid */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center">
//                 {awards.map((award, index) => (
//                     <div
//                         key={index}
//                         className={`flex flex-col items-center justify-center gap-18 text-center p-6 rounded-lg ${award.bgColor} w-70 h-80`}
//                     >
//                         <img
//                             src={award.image}
//                             alt={award.title}
//                             className="w-24 h-24 object-contain mb-4"
//                         />
//                         <p className="font-medium">{award.title}</p>
//                     </div>
//                 ))}
//             </div>
//             </div>
//         </Container>
//     );
// };

// export default ForthSec;
