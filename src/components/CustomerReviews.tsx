'use client';

const imgVector = "http://localhost:3845/assets/6b67df003f6065b2662447bb23003bdb6f42f907.svg";

function StarIcon() {
  return (
    <div className="relative w-8 h-8">
      <div className="absolute inset-[14.9%_14.33%_16.96%_14.33%]">
        <img alt="star" className="block max-w-none w-full h-full" src={imgVector} />
      </div>
    </div>
  );
}

export default function CustomerReviews() {
  const reviews = [
    {
      id: 1,
      stars: 4,
      text: "TBN completely transformed our bathroom. The team was professional, detail-oriented, and finished on time. Highly recommended!",
      author: "Jessica M.",
      height: "h-[204px]",
      position: "col-span-1 row-span-1"
    },
    {
      id: 2,
      stars: 5,
      text: "We recently had TBN renovate our bathroom, and the results exceeded our expectations. The craftsmanship was outstanding, especially the waterproofing and tile work. The crew kept everything clean and respected our home throughout the project. I wouldn't hesitate to recommend TBN to anyone looking for reliable and high-quality tiling or renovation services.",
      author: "Alexa",
      height: "h-[316px]",
      position: "col-span-1 row-span-2"
    },
    {
      id: 3,
      stars: 4,
      text: "Our kitchen splashback turned out perfect. Stylish, clean, and done right on time.",
      author: "Michael B.",
      height: "h-[204px]",
      position: "col-span-1 row-span-1"
    },
    {
      id: 4,
      stars: 5,
      text: "TBN completely transformed our bathroom. The team was professional, detail-oriented, and finished on time. Highly recommended!",
      author: "Jessica M.",
      height: "h-[204px]",
      position: "col-span-1 row-span-1"
    },
    {
      id: 5,
      stars: 5,
      text: "TBN completely transformed our bathroom. The team was professional, detail-oriented, and finished on time. Highly recommended!",
      author: "Jessica M.",
      height: "h-[204px]",
      position: "col-span-1 row-span-1"
    },
    {
      id: 6,
      stars: 4,
      text: "Our kitchen splashback turned out perfect. Stylish, clean, and done right on time.",
      author: "Michael B.",
      height: "h-[204px]",
      position: "col-span-1 row-span-1"
    },
    {
      id: 7,
      stars: 5,
      text: "We recently had TBN renovate our bathroom, and the results exceeded our expectations. The craftsmanship was outstanding, especially the waterproofing and tile work. The crew kept everything clean and respected our home throughout the project. I wouldn't hesitate to recommend TBN to anyone looking for reliable and high-quality tiling or renovation services.",
      author: "Alexa",
      height: "h-[316px]",
      position: "col-span-1 row-span-2"
    },
    {
      id: 8,
      stars: 4,
      text: "Our kitchen splashback turned out perfect. Stylish, clean, and done right on time.",
      author: "Michael B.",
      height: "h-[204px]",
      position: "col-span-1 row-span-1"
    },
    {
      id: 9,
      stars: 4,
      text: "We recently had TBN renovate our bathroom, and the results exceeded our expectations. The craftsmanship was outstanding, especially the waterproofing and tile work. The crew kept everything clean and respected our home throughout the project. I wouldn't hesitate to recommend TBN to anyone looking for reliable and high-quality tiling or renovation services.",
      author: "Alexa",
      height: "h-[316px]",
      position: "col-span-1 row-span-2"
    }
  ];

  return (
    <div className="w-full max-w-[1168px] mx-auto px-4 py-16">
      {/* Masonry Grid Layout - 3 columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-min">
        {reviews.map((review) => (
          <div
            key={review.id}
            className={`bg-[#2e2e2e] rounded-lg p-4 flex flex-col ${review.height} overflow-hidden`}
          >
            {/* Stars */}
            <div className="flex gap-0 mb-4">
              {Array.from({ length: review.stars }).map((_, index) => (
                <StarIcon key={index} />
              ))}
            </div>

            {/* Review Content */}
            <div className="flex flex-col flex-1 gap-3 px-2">
              {/* Review Text */}
              <p className="text-[#fcfcf7] text-[16px] leading-normal font-normal flex-1">
                {review.text}
              </p>
              
              {/* Author */}
              <p className="text-[#fcfcf7] text-[16px] font-bold leading-normal mt-auto">
                {review.author}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}