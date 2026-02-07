

// import React from "react";
// import img from "../assets/fifth-sec.png";
// import Button from "./Button";
// // import image22 from "../assets/image-22.png";

// const ArticleSecond = () => {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
//                     px-6 md:px-12 lg:px-28 mt-10 gap-10">

//       {/* LEFT CONTENT */}
//       <div className="flex flex-col justify-center">
//       <Button name="Testimonial" className="bg-[#dcfbfd] rounded text-lg text-[#0CBBC7]" />

//         <h2 className="font-sans mt-4 text-2xl md:text-3xl lg:text-4xl leading-snug">
//           See how <br />
//           customers <br />
//           <span className="font-bold">drive impact.</span>
//         </h2>

//         <button className="bg-[#0cbbc7] px-5 py-2 text-white font-medium 
//                            mt-4 text-lg md:text-xl w-fit rounded">
//           See case studies
//         </button>
//       </div>

//       {/* IMAGE + OVERLAY */}
//       <div className="relative flex justify-center md:justify-start lg:col-span-2">
//         <div className="relative w-full max-w-sm md:max-w-md overflow-visible">

//           <img
//             src={img}
//             alt="banner"
//             className="w-full object-cover rounded-lg"
//           />

//           {/* OVERLAY CARD */}
//           <div
//             className="absolute 
//                        -bottom-0 md:-bottom-0
//                        right-0 md:-right-24 lg:-right-40
//                        bg-[#edfeff] p-4 rounded-xl 
//                        w-full max-w-xs shadow-lg"
//           >
//             {/* <img src={image22} alt="" /> */}

//             <p className="font-sans text-[#858686] mt-3 text-sm md:text-base">
//               "I used to have a bunch of different tools I had to pay for,
//               with Circle you get everything in one bundle."
//             </p>

//             <h5 className="mt-3">
//               <span className="font-bold text-black">
//                 Michel Dedrick
//               </span>
//               <br />
//               <span className="font-light text-black text-sm">
//                 Senior Conversion Optimizer
//               </span>
//             </h5>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ArticleSecond;




















// import React from "react";
// import Button from "./Button";
// import girlImg from "../assets/fifth-sec.png"; // replace with your image

// const ArticleSecond = () => {
//   return (
//     <section className="py-20">
//       <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

//         {/* LEFT SIDE TEXT */}
//         <div>
//           <p className="text-[#0CBBC7] text-sm font-semibold mb-2 uppercase tracking-wider">
//             Testimonials
//           </p>

//           <h2 className="text-3xl md:text-4xl font-bold mb-6">
//             See how customers <br /> drive impact
//           </h2>

//           <Button
//             name="See case studies"
//             className="bg-[#0CBBC7] text-white px-6 py-3 rounded-md hover:scale-105 transition"
//           />
//         </div>

//         {/* RIGHT SIDE CARD */}
//         <div className="flex gap-6 items-center">

//           {/* Image */}
//           <div className="relative">
//             <img
//               src={girlImg}
//               alt="testimonial"
//               className="rounded-lg w-[400px] h-[400px] shadow-lg"
//             />

//             {/* play button */}
//             <div className="absolute inset-0 flex items-center justify-center">
//               <div className="bg-[#0CBBC7] text-white rounded-full w-14 h-14 flex items-center justify-center cursor-pointer hover:scale-110 transition">
//                 ▶
//               </div>
//             </div>
//           </div>

//           {/* Card */}
//           <div className="bg-[#EAFBFD] p-6 rounded-lg shadow w-72  h-60 absolute right-20">
//             <img
//               src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
//               alt="paypal"
//               className="w-50 mb-3"
//             />

//             <p className="text-gray-600 text-sm mb-4">
//               "I used to have a bunch of different tools I had to pay for, with
//               Circle you get everything in one bundle."
//             </p>

//             <h4 className="font-semibold text-sm">Michel Dedrick</h4>
//             <p className="text-xs text-gray-500">
//               Senior Conversion Optimizer
//             </p>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default ArticleSecond;




























// import React from "react";
// import Button from "./Button";
// import girlImg from "../assets/fifth-sec.png";

// const ArticleSecond = () => {
//   return (
//     <section className="py-20">
//       <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

//         {/* LEFT SIDE TEXT */}
//         <div>
//           <p className="text-[#0CBBC7] text-sm font-semibold mb-2 uppercase tracking-wider">
//             Testimonials
//           </p>

//           <h2 className="text-3xl md:text-4xl font-bold mb-6">
//             See how customers <br /> drive impact
//           </h2>

//           <Button
//             name="See case studies"
//             className="bg-[#0CBBC7] text-white px-6 py-3 rounded-md hover:scale-105 transition"
//           />
//         </div>

//         {/* RIGHT SIDE */}
//         {/* ⭐ relative added for absolute card positioning */}
//         <div className="relative flex flex-col md:flex-row gap-6 items-center">

//           {/* IMAGE */}
//           <div className="relative">
//             <img
//               src={girlImg}
//               alt="testimonial"
//               className="rounded-lg w-[320px] md:w-[360px] h-[320px] md:h-[450px] shadow-lg object-cover"
//             />

//             {/* play button */}
//             <div className="absolute inset-0 flex items-center justify-center">
//               <div className="bg-[#0CBBC7] text-white rounded-full w-14 h-14 flex items-center justify-center cursor-pointer hover:scale-110 transition">
//                 ▶
//               </div>
//             </div>
//           </div>

//           {/* CARD */}
//           <div
//             className="
//               bg-[#EAFBFD] p-6 rounded-lg shadow

//               w-full md:w-72
//               h-auto md:h-60

//               relative md:absolute
//               mt-6 md:mt-0

//               md:right-8
//               lg:right-2
//               md:top-65
//               md:-translate-y-1/2
//             "
//           >
//             <img
//               src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
//               alt="paypal"
//               className="w-32 mb-3"
//             />

//             <p className="text-gray-600 text-sm mb-4">
//               "I used to have a bunch of different tools I had to pay for, with
//               Circle you get everything in one bundle."
//             </p>

//             <h4 className="font-semibold text-sm">Michel Dedrick</h4>
//             <p className="text-xs text-gray-500">
//               Senior Conversion Optimizer
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ArticleSecond;

























import React from "react";
import Button from "./Button";
import girlImg from "../assets/fifth-sec.png";
import Container from "./Container";

const ArticleSecond = () => {
    return (
        <Container>
            <section className="py-20">
                <div className=" mx-auto  grid lg:grid-cols-2 gap-12 items-center">

                    {/* LEFT SIDE TEXT */}
                    <div className="text-center md:text-left mx-auto">
                        <p className="text-[#0CBBC7] text-sm font-semibold mb-2 uppercase tracking-wider">
                            Testimonials
                        </p>

                        <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                            See how customers <br /> drive impact
                        </h2>

                        <Button
                            name="See case studies"
                            className="bg-[#0CBBC7] text-white px-6 py-3 rounded-md hover:scale-105 transition"
                        />
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="relative flex flex-col lg:flex-row gap-6 items-center">

                        {/* IMAGE */}
                        <div className="relative">
                            <img
                                src={girlImg}
                                alt="testimonial"
                                className="rounded-lg w-[320px] lg:w-[360px] h-[320px] lg:h-[450px] shadow-lg object-cover hover:scale-105 transition"
                            />

                            {/* play button */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="bg-[#0CBBC7] text-white rounded-full w-14 h-14 flex items-center justify-center cursor-pointer hover:scale-110 transition">
                                    ▶
                                </div>
                            </div>
                        </div>

                        {/* CARD */}
                        <div
                            className="
              bg-[#EAFBFD] p-6 rounded-lg shadow

              w-full lg:w-72
              h-auto lg:h-60

              relative lg:absolute
              mt-6 lg:mt-0

              lg:right-2
              xl:right:10

              lg:top-1/2
              lg:-translate-y-1/2
            "
                        >
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                                alt="paypal"
                                className="w-32 mb-3"
                            />

                            <p className="text-gray-600 text-sm mb-4">
                                "I used to have a bunch of different tools I had to pay for, with
                                Circle you get everything in one bundle."
                            </p>

                            <h4 className="font-semibold text-sm">Michel Dedrick</h4>
                            <p className="text-xs text-gray-500">
                                Senior Conversion Optimizer
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </Container>
    );
};

export default ArticleSecond;
