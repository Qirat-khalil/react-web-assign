// import React from 'react'

// const FifthSec = () => {
//   return (
//     <>
//     </>
//   )
// }

// export default FifthSec















import React from "react";
import Button from "./Button"; // assuming you already have a Button component
import card1 from '../assets/card1-img.png'
import card2 from '../assets/card2-img.png'
import card3 from '../assets/card3-img.png'
import Container from "./Container";

const cards = [
  {
    title: "Excepteur sint occaecat cupidatat non proident",
    desc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
    image: card1, // replace with your image path
  },
  {
    title: "Quis nostrum exercitationem ullam corporis suscipit laboriosam",
    desc: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam. nisi ut aliquid ex ea commodi consequatur autem vel eum iure reprehenderit",
    image: card2,
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    desc: "Culpatem accusantium doloremque laudantium, totam rem aperiam. Aaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    image: card3,
  },
];

const FifthSec = () => {
  return (
   <Container>
     <section className=" py-16">
      <div className="text-center mb-12">
       <Button
            name="Resource"
            className="font-bold  mb-8 bg-[#dcfbfd] rounded text-[#0CBBC7] px-8 py-3 text-lg  hover:scale-105 transition"
          />
        <h2 className="text-3xl md:text-4xl font-bold">
          Stay in the <span className="font-bold">know</span>
        </h2>
      </div>

      <div className=" mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 ">
        {cards.map((card, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
            <img src={card.image} alt={card.title} className="w-full h-48 object-cover" />
            <div className="p-6 flex flex-col flex-1">
              <h3 className="font-semibold text-lg mb-2">{card.title}</h3>
              <p className="text-gray-500 flex-1">{card.desc}</p>
              <Button name="Read more" className="mt-4 bg-teal-400 text-white rounded px-4 py-2" />
            </div>
          </div>
        ))}
      </div>
    </section>
   </Container>
  );
};

export default FifthSec;
