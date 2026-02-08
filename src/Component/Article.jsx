

import React from "react";
import laptop from "../assets/third-sec.png";
import group1 from "../assets/group1.png";
import group2 from "../assets/group2.png";
import group3 from "../assets/group3.png";
import group4 from "../assets/group4.png";
import Container from "./Container";
import Button from "./Button";

const ArticleSection = () => {
    return (
        <>
            <Container>
                {/* HEADING */}
                <div className="text-center justify-center px-4 ">
                    <Button name="Built for People" className="bg-[#dcfbfd] rounded text-lg mt-8  text-[#0CBBC7] mb-8" />
                    <h2 className="text-xl mt-5 mb-5 md:text-2xl lg:text-3xl text-center">
                        <span className="font-bold">Easy</span> for beginners.{" "}
                        <span className="font-bold">Powerful</span> for experts.
                    </h2>
                </div>

                {/* LOGOS SECTION */}
                <div
                    className="grid grid-cols-4 
                   w-full px-6 md:px-12 lg:px-20 mt-6 gap-6 mt-16"
                >
                    <div className="flex justify-center border-b-4 border-b-[#33bfc6] pb-4">
                        <img
                            src={group1}
                            alt=""
                            className=" object-contain contrast-125 saturate-75"
                        />
                    </div>

                    <div className="flex justify-center pb-4">
                        
                        <img
                            src={group2}
                            alt=""
                            className=" object-contain contrast-125 "
                        />
                    </div>

                    <div className="flex justify-center pb-4">
                        <img
                            src={group3}
                            alt=""
                            className=" object-contain contrast-125 "
                        />
                    </div>

                    <div className="flex justify-center pb-4">
                        <img
                            src={group4}
                            alt=""
                            className=" object-contain contrast-125 "
                        />
                    </div>
                </div>



                  <div className='grid grid-cols-1 md:grid-cols-2 mt-12 items-center px-4 md:px-8'>
                {/* Left */}
                <div className='text-center md:text-left'>
                   
                    <h3 className='mt-8 font-bold text-4xl'>Tool built for people.</h3>
                    <p className='mt-5 text-lg mb-5'>
                        Whether you want to edit your Google Docs, resolve Jira issues, or collaborate over Zoom.
                        <br /><br />
                        Circle has 100+ integrations with tools you already use and love.
                    </p>
                     <Button name="Get started for free" className=" rounded mt-8 text-lg text-white  bg-[#0CBBC7] " />
                </div>

                {/* Right */}
                <div className='flex md:justify-end md:items-end w-full h-auto mt-8 md:mt-0 justify-center items-center'>
                    <img src={laptop} alt="tool" className='w-3/4 md:w-full lg:w-[400px] h-auto object-contain hover:scale-105 transition' />
                </div>
            </div>
            </Container>
        </>
    );
};

export default ArticleSection;