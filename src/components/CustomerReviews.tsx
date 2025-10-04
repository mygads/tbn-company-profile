'use client';

import { FaStar } from 'react-icons/fa';

export default function CustomerReviews() {
  const reviews = [
    {
      id: 1,
      stars: 5,
      text: "TBN completely transformed our bathroom. The team was professional, detail-oriented, and finished on time. Highly recommended!",
      author: "Jessica M."
    },
    {
      id: 2,
      stars: 5,
      text: "We recently had TBN renovate our bathroom, and the results exceeded our expectations. The craftsmanship was outstanding, especially the waterproofing and tile work. The crew kept everything clean and respected our home throughout the project. I wouldn't hesitate to recommend TBN to anyone looking for reliable and high-quality tiling or renovation services.",
      author: "Alexa R."
    },
    {
      id: 3,
      stars: 5,
      text: "Our kitchen splashback turned out perfect. Stylish, clean, and done right on time.",
      author: "Michael B."
    },
    {
      id: 4,
      stars: 5,
      text: "The regrouting service made our old tiles look brand new. Amazing attention to detail and very professional work.",
      author: "Sarah K."
    },
    {
      id: 5,
      stars: 5,
      text: "Fixed our leaking shower quickly and efficiently. No more water damage worries. Great service!",
      author: "David L."
    },
    {
      id: 6,
      stars: 5,
      text: "Professional waterproofing service. Peace of mind knowing our bathroom is properly sealed.",
      author: "Emma T."
    },
    {
      id: 7,
      stars: 5,
      text: "The team arrived on time every day, worked cleanly, and the final result is stunning. Our kitchen has never looked better!",
      author: "Robert P."
    },
    {
      id: 8,
      stars: 5,
      text: "Excellent communication throughout the project. They kept us informed at every step.",
      author: "Lisa M."
    },
    {
      id: 9,
      stars: 5,
      text: "Fair pricing, quality work, and finished ahead of schedule. What more could you ask for? Highly recommend TBN Tiling & Stone.",
      author: "James W."
    },
    {
      id: 10,
      stars: 5,
      text: "Our bathroom renovation was flawless. The attention to detail in the tile installation was incredible. Worth every penny!",
      author: "Maria G."
    },
    {
      id: 11,
      stars: 5,
      text: "TBN did an amazing job on our kitchen backsplash. The design suggestions were spot on and the execution was perfect.",
      author: "Chris H."
    },
    {
      id: 12,
      stars: 5,
      text: "The waterproofing work they did has given us complete peace of mind. No more leaks or moisture issues!",
      author: "Karen S."
    },
    {
      id: 13,
      stars: 5,
      text: "Professional, reliable, and skilled. Our bathroom looks like it belongs in a magazine now. Thank you TBN!",
      author: "Tom R."
    },
    {
      id: 14,
      stars: 5,
      text: "Great experience from start to finish. Clear communication, fair pricing, and outstanding craftsmanship.",
      author: "Jennifer L."
    },
    {
      id: 15,
      stars: 5,
      text: "The tile work in our kitchen is absolutely beautiful. The team was meticulous and the results speak for themselves.",
      author: "Mark D."
    },
    {
      id: 16,
      stars: 5,
      text: "Fixed our shower leak and did a complete renovation. The quality of work is exceptional. Highly satisfied!",
      author: "Rachel N."
    },
    {
      id: 17,
      stars: 5,
      text: "TBN's regrouting service brought new life to our old tiles. They look brand new again. Fantastic work!",
      author: "Peter C."
    },
    {
      id: 18,
      stars: 5,
      text: "The splashback installation was done perfectly. Clean work, great design advice, and finished on schedule.",
      author: "Sophie A."
    },
    {
      id: 19,
      stars: 5,
      text: "Outstanding service! The team was respectful of our home, worked efficiently, and the results are amazing.",
      author: "Andrew F."
    },
    {
      id: 20,
      stars: 5,
      text: "From consultation to completion, TBN exceeded our expectations. Professional, skilled, and trustworthy.",
      author: "Nicole B."
    },
    {
      id: 21,
      stars: 5,
      text: "Our bathroom renovation turned out better than we imagined. The craftsmanship is top-notch!",
      author: "Daniel K."
    },
    {
      id: 22,
      stars: 5,
      text: "TBN did a fantastic job on our kitchen tiles. The attention to detail and quality is unmatched.",
      author: "Victoria M."
    },
    {
      id: 23,
      stars: 5,
      text: "The waterproofing work has given us complete confidence in our bathroom. No more worries about water damage!",
      author: "George T."
    },
    {
      id: 24,
      stars: 5,
      text: "Excellent service from start to finish. Professional team, great communication, and beautiful results.",
      author: "Helen W."
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-[#fcfcf7]">
      <div className="container mx-auto px-10">
        {/* Masonry Grid Layout using CSS columns */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 md:gap-6 space-y-4 md:space-y-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-[#2e2e2e] rounded-xl p-6 break-inside-avoid inline-block w-full hover:shadow-xl transition-shadow duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, index) => (
                  <FaStar key={index} className="w-5 h-5 md:w-6 md:h-6 text-[#febe05]" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-[#fcfcf7] text-sm md:text-base leading-relaxed mb-4">
                {review.text}
              </p>
              
              {/* Author */}
              <p className="text-[#febe05] text-sm md:text-base font-bold">
                — {review.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}