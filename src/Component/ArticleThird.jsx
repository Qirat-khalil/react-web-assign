

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
